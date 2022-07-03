import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';

import AppClassApp from './class-components/App';
import AppFunctionalApp from './functional-components/App';
import { useSelector, useDispatch } from 'react-redux';
import { setClass, setFunctional } from '../services/reducers/appSlice';

import '../assets/stylesheets/App.style.css';

const AppExperience = () => {
  const classExperience = useSelector((state) => state.app.class);
  const functionalExperience = useSelector((state) => state.app.functional);
  const dispatch = useDispatch();

  if (classExperience) {
    return <AppClassApp />;
  }
  if (functionalExperience) {
    return <AppFunctionalApp />;
  } else {
    // TODO implement error boundaries fallback
    <div>Error</div>;
  }

  return (
    <div className="experience-container">
      <h1>Welcome to Monsters Rolodex</h1>
      <p>
        This web app was built with React, please select your developer
        experience
      </p>
      <p>
        Hint ! wherever you see this{' '}
        <span>
          <IconButton
            aria-label="code snippet"
            color="primary"
            // onClick={showCodeModalHandler}
          >
            <CodeIcon color="primary" />
          </IconButton>
        </span>{' '}
        code icon below a component in the browser this will open a code snippet
        for that relative component
      </p>
      {/* <AppClassApp /> */}
      <div className="btn-group">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={10}
        >
          <Button variant="outlined" onClick={() => dispatch(setClass())}>
            Class Components
          </Button>
          <Button variant="outlined" onClick={() => dispatch(setFunctional())}>
            Functional Components Hooks
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default AppExperience;
