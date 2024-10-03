import React from 'react';
import PropTypes from 'prop-types';

export function Button({ label, onClick, type, classNameVariant, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${classNameVariant} ${className}`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classNameVariant: PropTypes.oneOf(['btn__encrypt', 'btn__decrypt', 'btn__copy']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  classNameVariant: '',
  className: '',
};