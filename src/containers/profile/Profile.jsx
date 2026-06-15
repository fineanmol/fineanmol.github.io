import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProf] = useState([]);
  const [hasValidToken, setHasValidToken] = useState(false);

  const setProfileFunction = (profileData) => {
    setProf(profileData);
  };

  const getProfileData = useCallback(() => {
    const fetchWithRestFallback = () => {
      fetch(`https://api.github.com/users/${openSource.githubUserName}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`REST API Error: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (result) {
            setProfileFunction({
              name: result.name || result.login,
              bio: result.bio || "",
              isHireable: result.hireable || false,
              avatarUrl: result.avatar_url,
              location: result.location || "",
            });
            setHasValidToken(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching GitHub REST profile data:", error.message);
          setProfileFunction("Error");
          openSource.showGithubProfile = "false";
          setHasValidToken(false);
        });
    };

    // If token is missing, directly use REST fallback
    if (!openSource.githubConvertedToken || openSource.githubConvertedToken === "YOUR_GITHUB_TOKEN_HERE") {
      console.info("ℹ️ GitHub token not configured for profile. Using public REST API fallback.");
      fetchWithRestFallback();
      return;
    }

    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openSource.githubConvertedToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            user(login: "${openSource.githubUserName}") { 
              name
              bio
              isHireable
              avatarUrl
              location
            }
          }
        `,
      }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Invalid GitHub token");
        }
        if (response.status !== 200) {
          throw new Error(`GitHub API Error: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result && result.data && result.data.user) {
          setProfileFunction(result.data.user);
          setHasValidToken(true);
        } else {
          throw new Error("No profile data found");
        }
      })
      .catch((error) => {
        console.warn("GraphQL profile fetch failed, falling back to REST API:", error.message);
        fetchWithRestFallback();
      });
  }, []);

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      getProfileData();
    }
  }, [getProfileData]);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    hasValidToken &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
