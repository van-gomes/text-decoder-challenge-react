import React from "react";

export function Textarea({ id, className, onChange, placeholder, value, testid }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      data-testid={testid}
    />
  );
}
