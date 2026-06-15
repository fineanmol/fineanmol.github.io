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
    const fetchWithRestFallback = () => {
      fetch(`https://api.github.com/users/${openSource.githubUserName}/repos?sort=updated&per_page=30`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`REST API Error: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (Array.isArray(result)) {
            // Sort by stars first, then take top 6
            const sorted = result
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .slice(0, 6);
            
            const mapped = sorted.map((repo) => ({
              node: {
                id: repo.id.toString(),
                name: repo.name,
                description: repo.description || "",
                url: repo.html_url,
                forkCount: repo.forks_count,
                stargazers: {
                  totalCount: repo.stargazers_count,
                },
                diskUsage: repo.size,
                primaryLanguage: repo.language ? {
                  name: repo.language,
                  color: getLanguageColor(repo.language),
                } : null,
              }
            }));
            setRepo(mapped);
            setHasToken(true);
          } else {
            throw new Error("Invalid response format");
          }
        })
        .catch((error) => {
          console.error("Error fetching GitHub REST data:", error.message);
          setHasToken(false);
        });
    };

    const getLanguageColor = (lang) => {
      const colors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Python: "#3572A5",
        Java: "#b07219",
        Go: "#00ADD8",
        Ruby: "#701516",
        "C++": "#f34b7d",
        "C#": "#178600",
        PHP: "#4F5D95",
        Shell: "#89e051",
      };
      return colors[lang] || "#8e8ea0";
    };

    // If token is missing, directly use REST fallback
    if (!openSource.githubConvertedToken || openSource.githubConvertedToken === "YOUR_GITHUB_TOKEN_HERE") {
      console.info("ℹ️ GitHub token not configured. Using public REST API fallback.");
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
          throw new Error("Invalid GitHub token.");
        }
        if (response.status !== 200) {
          throw new Error(`GitHub API Error: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        if (result.data && result.data.user && result.data.user.pinnedItems) {
          setRepo(result.data.user.pinnedItems.edges);
          setHasToken(true);
        } else {
          throw new Error("No pinned repositories found");
        }
      })
      .catch((error) => {
        console.warn("GraphQL fetch failed, falling back to REST API:", error.message);
        fetchWithRestFallback();
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
