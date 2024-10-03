import React from 'react';
import PropTypes from 'prop-types';

export function Textarea({ value, onChange, placeholder, className, ...props }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  className: ''
};
