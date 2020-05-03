import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { from, BehaviorSubject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import useObservable from 'Hooks/useObservable';
import fetchReposByName from 'API/repos';
import { Repo } from 'Repo.model';
import ReposGrid from './ReposGrid';

const searchSubject = new BehaviorSubject('');
const SearchRepos$ = searchSubject.pipe(
  filter((query: string) => query.length > 2),
  debounceTime(600),
  distinctUntilChanged(),
  switchMap((query: string) => from(fetchReposByName(query))),
);

const Search = () => {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  useObservable(SearchRepos$, setRepos, setLoading, setErrors);

  useEffect(() => {
    if (!query) {
      setLoading(false);
    } else if (query.length <= 2) {
      setRepos([]);
    }
  }, [query]);

  const handleSearchRepoChange = (evt: any) => {
    const query = evt.target.value;

    setQuery(query);
    setLoading(true);
    searchSubject.next(query);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name="query"
          value={query}
          className="search-container__input"
          placeholder="Search..."
          onChange={handleSearchRepoChange}
        />
        <FaSearch className="search-container__icon" aria-hidden="true" />
      </div>
      {errors && <p>{errors}</p>}
      {!errors && loading && <p>Loading...</p>}
      {repos?.length > 0 && <ReposGrid repos={repos} />}
    </>
  );
};

export default Search;
