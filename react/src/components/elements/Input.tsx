import React, { Component } from 'react';

export const Input = (props: any) => {
  let inputElement = null;

  switch (props.type) {
    case 'login':
      inputElement = (
        <input
          {...props}
          autoFocus={props.autofocus}
          type="text"
          placeholder={props.placeholder}
        />
      );
      break;

    default:
      break;
  }

  return inputElement;
};

interface InputProps {
  type: string;
  placeholder: string;
  autofocus: boolean;
}
