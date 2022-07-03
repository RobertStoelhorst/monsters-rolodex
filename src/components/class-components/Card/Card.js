import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../../../assets/stylesheets/card.style.css';

import Spinner from '../../global-components/Spinner/Spinner ';

class Card extends Component {
  render() {
    const { img, title, text, loading } = this.props;

    const error = { img: undefined, title: undefined, text: undefined };

    // TODO reduce syntax to ternary....
    // if (!img) {
    //   error.img = 'image is broken';
    // }
    // if (!title) {
    //   error.title = 'missing title';
    // }
    // if (!text) {
    //   error.text = 'missing body text';
    // }

    // shorter ternary syntax...
    error.img = !img ? 'image is broken' : undefined;
    error.title = !title ? 'missing title' : undefined;
    error.text = !text ? 'missing body text' : undefined;

    console.log(loading);
    // console.log(this.props.loading);

    if (loading) {
      return <Spinner size={100} thickness={4} />;
    }

    return (
      <div className="card-container">
        {loading ? (
          <Spinner size={100} thickness={4} />
        ) : (
          <>
            <img
              className="error-text"
              src={
                error.img || `https://robohash.org/${img}?set=set2&size=200x200`
              }
              alt={error.img || text}
            />
            <h2 className={!title ? 'error-text' : 'title-text'}>
              {error.title || title}
            </h2>
            <p className={!text ? 'error-text' : 'body-text'}>
              {error.text || text}
            </p>
          </>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  img: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  text: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default Card;
