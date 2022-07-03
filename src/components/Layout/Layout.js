import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setHome } from '../../services/reducers/appSlice';

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'start',
          justifyContent: 'space-between',
          padding: '5px 30px',
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={() => dispatch(setHome())}
        >
          Home
        </Button>
        <p>placeholder for a layout component</p>
      </div>
    </div>
  );
};

export default Layout;
