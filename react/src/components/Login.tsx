import React, { Component } from 'react';
import { Input } from './elements/Input';
import { Spinner } from './elements/Spinner';

interface LoginProps {
  isOpen: boolean;
  onClose: Function;
}

export default class Login extends Component<LoginProps, any> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.isOpen ? 'popup popup--open' : 'popup'}>
        <div className="popup__header">
          <div
            title="Close"
            className="close layout--center"
            onClick={this.props.onClose as any}
          >
            X
          </div>
        </div>
        <div className="popup__body layout--center">
          <div className="popup__body-inner">
            <div className="form">
              <div className="form__title">
                JOIN <span className="highlight">#</span>DEVRANT
              </div>
              <div className="form__description">
                Vote and comment on others' rants. Post your own.
              </div>
              <form name="login">
                <div className="login">
                  <Input type="login" placeholder="USERNAME" autofocus={true} required/>
                  <Input type="login" placeholder="PASSWORD" required />

                  <Spinner />

                  <div className="form__error">Some fields are missing !</div>

                  <input type="submit" value="LET ME IN" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
