import React, { Component } from 'react';
import { Modal } from '../containers/Modal';

export const Alert = (props: any) => {
  <Modal active={props.showAlert}>
    <div className="form">
      <div className="form__title">
        <span className="highlight">#</span>
        {props.title}
      </div>
      <div className="form__description">
        {/* You can not vote on your own post :) */}
        {props.description}
      </div>
      <form name="alert">
        <div className="alert">
          <input type="submit" value="OK" />
        </div>
      </form>
    </div>
  </Modal>;
};
