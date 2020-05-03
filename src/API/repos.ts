const fetchReposByName = async (repoName: string) => {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${repoName}&sort=stars&order=desc&type=Repositories&per_page=10`,
  );
  return await fetch(endpoint)
    .then((data) => data.json())
    .then((repos) => repos.items);
};

export default fetchReposByName;
