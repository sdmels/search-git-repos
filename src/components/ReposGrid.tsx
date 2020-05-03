import React from 'react';

import Card from './Card';
import { Repo } from 'Repo.model';

interface Props {
  repos: Repo[];
}

function ReposGrid({ repos }: Props) {
  return (
    <ul className="repos-container">
      {repos.map((repo: Repo, index: number) => {
        const { id, owner, html_url, stargazers_count, watchers_count } = repo;
        const { login, avatar_url } = owner;
        return (
          <li key={id}>
            <Card
              header={`#${index + 1}`}
              stars={stargazers_count}
              avatar={avatar_url}
              href={html_url}
              name={login}
              followers={watchers_count}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReposGrid;
