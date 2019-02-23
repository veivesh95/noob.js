import React, { Component } from 'react';

export const Alert = (props: any) => {
  <div className={props.showAlert ? 'popup popup--open' : 'popup'}>
    <div className="popup__header">
      <div title="Close" className="close layout--center">
        X
      </div>
    </div>
    <div className="popup__body layout--center">
      <div className="popup__body-inner">
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
      </div>
    </div>
  </div>;
};
