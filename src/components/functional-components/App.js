import React, { useState } from 'react';

import SearchBox from '../functional-components/SearchBox/SearchBox';
import CardList from '../functional-components/CardList/CardList';
import Spinner from '../global-components/spinner';

const App = () => {
  const [loading, setLoading] = useState(false);
  const filteredMonsters = {};

  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    return { searchField };
  };

  return (
    <div className="App">
      <h1 className="app-title" title="Search Monsters App">
        Search Monsters
      </h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      {loading ? <Spinner /> : <CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default App;
