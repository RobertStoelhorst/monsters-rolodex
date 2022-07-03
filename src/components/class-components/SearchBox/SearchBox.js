import React, { Component } from 'react';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import Collapse from '@mui/material/Collapse';
import { searchBox } from '../../../assets/code-examples/MonstersRolodexComponentCode';
import '../../../assets/stylesheets/SearchBox.styles.css';

export class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      codeModal: false,
    };
  }

  // COMPONENT LIFE CYCLE METHODS
  // componentDidCatch
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  render() {
    const showCodeModalHandler = () => {
      this.setState(
        (prevState) => ({
          codeModal: !prevState.codeModal,
        }),
        () => {
          // console.log(this.state.codeModal);
        }
      );
    };
    return (
      <div>
        <div className="search-box-container">
          <input
            className={`search-box ${this.props.className}`}
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHandler}
          />
          <IconButton
            aria-label="code snippet"
            color="primary"
            onClick={showCodeModalHandler}
          >
            <CodeIcon color="primary" />
          </IconButton>
        </div>
        <div>
          <Collapse in={this.state.codeModal} timeout={800} collapsedSize={0}>
            {searchBox}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default SearchBox;
