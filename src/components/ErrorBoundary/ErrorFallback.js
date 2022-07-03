import React from 'react';
// import Alert from '@material-ui/lab/Alert';
// import curbyLogo from './assets/img/error.jpeg';
import Button from '@mui/material/Button';

const ErrorFallback = () => {
  const onResetButtonClick = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div
      //   role="alert"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10%',
      }}
    >
      {/* <Alert severity="error">
        Oops! Something went wrong. We will look into the issue and fix it asap.
      </Alert> */}
      {/* <img src={curbyLogo} /> */}
      <div style={{ marginTop: '45px' }}>
        <Button type="button" color="success" onClick={onResetButtonClick}>
          Go to a safe place
        </Button>
        Button: Go to a safe place
      </div>
    </div>
  );
};

export default ErrorFallback;
