import React, { Component } from 'react';

export const Input = (props: InputProps) => {
  let inputElement = null;

  switch (props.type) {
    case 'login':
      inputElement = <input type="text" placeholder={props.placeholder} />;
      break;

    default:
      break;
  }

  return inputElement;
};

interface InputProps {
  type: string;
  placeholder: string;
}
