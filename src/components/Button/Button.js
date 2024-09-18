import React from "react";

export function Button({ id, onClick, label, className }) {
  return (
    <>
      <button
        id={id}
        className={className}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
}