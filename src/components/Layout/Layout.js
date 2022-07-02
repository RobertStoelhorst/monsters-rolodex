import React, { Component } from 'react';

export class Layout extends Component {
  render() {
    return (
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
        <h3>Layout</h3>
        <p>placeholder for a layout component</p>
      </div>
    );
  }
}

export default Layout;
