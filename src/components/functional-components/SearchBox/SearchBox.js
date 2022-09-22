import React, { useState } from 'react';

import PropTypes from 'prop-types';

import useToggle from '../../../hooks/useToggle';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import Collapse from '@mui/material/Collapse';

import { searchBox } from '../../../assets/functional-code-examples/MonstersRolodexFunctionalSearchBoxComponentCode';
import '../../../assets/stylesheets/SearchBox.styles.css';

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  const [showCode, setShowCode] = useToggle();

  return (
    <>
      <div className="search-box-container">
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        <IconButton
          aria-label="code snippet"
          color="primary"
          onClick={setShowCode}
        >
          <CodeIcon color="primary" />
        </IconButton>
      </div>
      <div>
        <Collapse in={showCode} timeout={800} collapsedSize={0}>
          {searchBox}
        </Collapse>
      </div>
    </>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SearchBox;
