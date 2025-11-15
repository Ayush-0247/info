import axios from "axios";
import { useEffect, useState } from "react";

export default function GitHubRepos({ username }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => setRepos(res.data));
  }, [username]);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Latest GitHub Repos</h3>

      <div className="grid md:grid-cols-3 gap-4">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" className="border p-4 rounded-xl">
            <h4 className="font-semibold">{repo.name}</h4>
            <p className="text-sm text-gray-500">{repo.language}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
