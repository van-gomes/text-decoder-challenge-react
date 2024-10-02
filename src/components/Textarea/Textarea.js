import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

export function Textarea({ value, onChange, placeholder, className, ...props }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.textarea} ${className}`}
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
