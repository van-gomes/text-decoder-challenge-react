import React from 'react';
import PropTypes from 'prop-types';

export function Button({ label, onClick, type, icon, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {icon}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};