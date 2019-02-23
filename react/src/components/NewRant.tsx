import React, { Component } from 'react';
import { Modal } from './containers/Modal';
import { Spinner } from './elements/Spinner';

export const NewRant = (props: NewRantProps) => {
  return (
    <Modal active={props.active} spinnerLoad={props.spinnerLoad}>
      <div className="form">
        <div className="form__title">
          NEW <span className="highlight">#</span>RANT
        </div>
        <div className="form__description">
          Express yourself with 140 characters.
        </div>
        <form name="new-rant">
          <div className="new-rant">
            <textarea maxLength={140} />

            <Spinner />

            <div className="form__error">Some fields are missing !</div>
            <input type="submit" value="POST" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

interface NewRantProps {
  active: boolean;
  spinnerLoad: boolean;
}
