import React, {
  useState,
  useEffect,
  useContext,
  Suspense,
  lazy,
  useCallback,
} from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);
  const [error, setError] = useState(null); // State to track errors
  const { isDark } = useContext(StyleContext);

  const getRepoData = useCallback(() => {
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
              pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      forkCount
                      stargazers {
                        totalCount
                      }
                      url
                      id
                      diskUsage
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
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
        // console.log("GitHub Data:", result);
        if (result.data && result.data.user && result.data.user.pinnedItems) {
          setRepo(result.data.user.pinnedItems.edges);
        } else {
          setError(new Error("Unexpected data structure"));
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
        setError(error); 
      });
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  // if (error) {
  //   return <div>Error fetching GitHub data: {error.message}</div>;
  // }

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v) => {
              return (
                v.node && ( // Add null check for v.node
                  <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                )
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github || "#"} // Ensure href is a string
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
