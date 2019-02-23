import React, { Component } from 'react';
import { Node } from 'unist';
import { Spinner } from '../elements/Spinner';

interface ModalProps {
  active: boolean;
  children: Node;
  spinnerLoad: boolean;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className={props.active ? 'popup popup--open' : 'popup'}>
      <div className="popup__header">
        <div title="Close" className="close layout--center">
          X
        </div>
      </div>
      <div className="popup__body layout--center">
        <div className="popup__body-inner">
          {props.spinnerLoad ? <Spinner /> : null}
          {props.children}
        </div>
      </div>
    </div>
  );
};
