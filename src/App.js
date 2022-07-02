import { Component } from 'react';
import './App.css';

import SearchBox from './components/SearchBox/SearchBox';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // COMPONENT LIFE CYCLE METHODS
  // componentDidCatch
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  componentDidMount() {
    // console.info('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
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
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
