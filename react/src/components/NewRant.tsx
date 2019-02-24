import React, { Component } from 'react';

interface NewRantProps {
  isOpen: boolean;
  onClose: Function;
}
interface NewRantState {}

export default class NewRant extends Component<NewRantProps, NewRantState> {
  constructor(props: NewRantProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.isOpen ? 'popup popup--open' : 'popup'}>
        <div className="popup__header">
          <div title="Close" className="close layout--center">
            X
          </div>
        </div>
        <div className="popup__body layout--center">
          <div className="popup__body-inner">
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

                  <div className="loader">
                    <div className="spinner" />
                  </div>

                  <div className="form__error">Some fields are missing !</div>

                  <input type="submit" value="POST" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
