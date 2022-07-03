import { Component } from 'react';
import '../../assets/stylesheets/App.style.css';
import { useDispatch } from 'react-redux';
import { setHome } from '../../services/reducers/appSlice';

import Spinner from '../global-components/Spinner/Spinner ';
import SearchBox from '../class-components/SearchBox/SearchBox';
import CardList from '../class-components/CardList/CardList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      loading: false,
      reqError: false,
    };
  }

  // COMPONENT LIFE CYCLE METHODS
  // componentDidCatch
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  componentDidMount() {
    // console.info('componentDidMount');
    this.setState(
      () => {
        return { loading: true };
      },
      () => {
        // console.log(this.state.loading);
      }
    );

    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) =>
          this.setState(
            () => {
              return { monsters: users, loading: false };
            },
            () => {
              // console.log(this.state);
            }
          )
        );
    } catch (e) {
      this.setState(
        () => {
          console.log(e);
          return { reqError: true };
        },
        () => {
          // console.log(this.state);
        }
      );
    }
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
        <CardList loading={this.state.loading} monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
