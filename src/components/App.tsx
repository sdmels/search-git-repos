import React from 'react';
import Search from './Search';

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="center-text">
          Search GitRepo <small>by name</small>
        </h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
