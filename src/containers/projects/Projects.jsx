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
  const FailedLoading = () => (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        <div className="projects-fallback">
          <h3>🔑 GitHub API Token Required</h3>
          <p>
            To display live GitHub projects, please add your GitHub Personal Access Token to the .env file.
          </p>
          <p>
            <strong>Instructions:</strong>
          </p>
          <ol>
            <li>Copy <code>env.example</code> to <code>.env</code></li>
            <li>Get your token from GitHub Settings → Developer settings → Personal access tokens</li>
            <li>Add the token to <code>REACT_APP_GITHUB_TOKEN</code> in .env</li>
            <li>Restart the development server</li>
          </ol>
        </div>
      </div>
      <Button
        text={"View GitHub Profile"}
        className="project-button"
        href={socialMediaLinks.github || "#"}
        newTab={true}
      />
    </div>
  );
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);
  const [hasToken, setHasToken] = useState(false);
  const { isDark } = useContext(StyleContext);

  const getRepoData = useCallback(() => {
    // Check if token exists
    if (!openSource.githubConvertedToken || openSource.githubConvertedToken === "YOUR_GITHUB_TOKEN_HERE") {
      console.info("ℹ️ GitHub token not configured. Set REACT_APP_GITHUB_TOKEN in .env file to display live projects.");
      setHasToken(false);
      return;
    }

    setHasToken(true);

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
        if (response.status === 401) {
          throw new Error("Invalid GitHub token. Please check your REACT_APP_GITHUB_TOKEN in .env");
        }
        if (response.status !== 200) {
          throw new Error(`GitHub API Error: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.data && result.data.user && result.data.user.pinnedItems) {
          setRepo(result.data.user.pinnedItems.edges);
        } else {
          throw new Error("No pinned repositories found");
        }
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error.message);
        setHasToken(false);
      });
  }, []);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  if (
    openSource.display &&
    hasToken &&
    !(typeof repo === "string" || repo instanceof String) &&
    repo.length > 0
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v) => {
              return (
                v.node && (
                  <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                )
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github || "#"}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else if (openSource.display) {
    return <FailedLoading />;
  } else {
    return null;
  }
}
