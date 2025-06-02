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
    // Check if token exists
    if (!openSource.githubConvertedToken || openSource.githubConvertedToken === "YOUR_GITHUB_TOKEN_HERE") {
      console.info("ℹ️ GitHub token not configured for profile. Using Contact section instead.");
      openSource.showGithubProfile = "false";
      setHasValidToken(false);
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
          console.error("Invalid GitHub token for profile. Please check your REACT_APP_GITHUB_TOKEN in .env");
          openSource.showGithubProfile = "false";
          setHasValidToken(false);
          return;
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
          console.info("No GitHub profile data found. Using Contact section instead.");
          openSource.showGithubProfile = "false";
          setHasValidToken(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub profile data:", error.message);
        setProfileFunction("Error");
        console.log("Because of this Error Contact Section is Showed instead of Profile");
        openSource.showGithubProfile = "false";
        setHasValidToken(false);
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
