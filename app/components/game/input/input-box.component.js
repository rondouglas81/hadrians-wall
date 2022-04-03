import React from "react";

export const InputBox = ({ value, onClick, wide }) => {
  return (
    <div
      className="input-box"
      data-filled={value}
      data-wide={wide}
      onClick={onClick}
    />
  );
};
