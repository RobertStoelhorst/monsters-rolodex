import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { img, title, text } = props;

  const error = { img: undefined, title: undefined, text: undefined };

  error.img = !img ? 'image is broken' : undefined;
  error.title = !title ? 'missing title' : undefined;
  error.text = !text ? 'missing body text' : undefined;

  return (
    <div className="card-container">
      <img
        className="error-text"
        src={error.img || `https://robohash.org/${img}?set=set2&size=200x200`}
        alt={error.img || text}
      />
      <h2 className={!title ? 'error-text' : 'title-text'}>
        {error.title || title}
      </h2>
      <p className={!text ? 'error-text' : 'body-text'}>{error.text || text}</p>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
  text: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
};

export default Card;
