import React from 'react';

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.icon && props.icon}
      {props.title && <snan>{props.title}</snan>}
    </button>
  );
};

export default Button;
