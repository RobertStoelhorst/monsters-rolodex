import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CircularProgress } from '@mui/material';

// classnames package A simple JavaScript utility for conditionally joining classNames together.
const Spinner = (props) => {
  console.log(props.thickness);
  return <CircularProgress size={props.size} thickness={props.thickness} />;
};

export default Spinner;
