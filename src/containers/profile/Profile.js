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
  const [error, setError] = useState(null);

  const setProfileFunction = (profileData) => {
    setProf(profileData);
  };

  const getProfileData = useCallback(() => {
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
        if (response.status !== 200) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.data && result.data.user) {
          setProfileFunction(result.data.user);
        } else {
          setError(new Error("Unexpected data structure"));
          openSource.showGithubProfile = "false";
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        setError(error);
        setProfileFunction("Error");
        console.log(
          "Because of this Error Contact Section is Showed instead of Profile"
        );
        openSource.showGithubProfile = "false";
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
