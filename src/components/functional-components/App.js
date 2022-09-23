import React, { useState, useEffect } from 'react';

import SearchBox from '../functional-components/SearchBox/SearchBox';
import CardList from '../functional-components/CardList/CardList';
import Spinner from '../global-components/spinner';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState('');
  // console.log({ searchField });
  console.log('render');

  // Do the fetch data
  useEffect(() => {
    console.log('requesting...');
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        if (users) {
          setMonsters(users);
        }
        setLoading(false);
      });
  }, []);

  // Do the filter without a new request on state change
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log('effect is firing');
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
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
