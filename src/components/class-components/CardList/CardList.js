import React, { Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import Card from '../Card/Card';
import '../../../assets/stylesheets/card-list.styles.css';

class CardList extends Component {
  render() {
    const { monsters, loading } = this.props;
    // console.log(this.props.loading);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <Card
              key={id}
              loading={loading}
              img={id}
              title={name}
              text={email}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => {
  return {dispatch(loading)};
};

export default connect(mapStateToProps)(CardList);
