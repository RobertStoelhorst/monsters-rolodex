import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';

const CardList = (props) => {
  const { monsters } = props;
  // console.log(
  //   monsters.length === 0
  //     ? 'filtering... https://jsonplaceholder.typicode.com/users'
  //     : { matches: monsters }
  // );

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return <Card key={id} img={id} title={name} text={email} />;
      })}
    </div>
  );
};

CardList.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
