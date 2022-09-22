import React, { Component } from 'react';

import Card from '../Card/Card';
import '../../../assets/stylesheets/card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(
      monsters.length === 0
        ? 'fetching from https://jsonplaceholder.typicode.com/users'
        : { 'fetch result': monsters }
    );

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return <Card key={id} img={id} title={name} text={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
