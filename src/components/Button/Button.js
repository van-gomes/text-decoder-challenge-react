import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ label, onClick, type, className, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};