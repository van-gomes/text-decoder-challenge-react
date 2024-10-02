import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export function Button({ label, onClick, type, variant, icon, className, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'danger', 'success', 'warning']),
  icon: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  className: '',
};