import React, { Component } from 'react';
import { Input } from './elements/Input';
import { Spinner } from './elements/Spinner';
import { Modal } from './containers/Modal';

interface LoginProps {
  isOpen: boolean;
  onClose: Function;
  spinnerLoad: boolean;
}

export default class Login extends Component<LoginProps, any> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <Modal active={this.props.isOpen} spinnerLoad={this.props.spinnerLoad}>
        <div className="form">
          <div className="form__title">
            JOIN <span className="highlight">#</span>DEVRANT
          </div>
          <div className="form__description">
            Vote and comment on others' rants. Post your own.
          </div>
          <form name="login">
            <div className="login">
              <Input
                type="login"
                placeholder="USERNAME"
                autoFocus={true}
                required
              />
              <Input type="login" placeholder="PASSWORD" required />

              <div className="form__error">Some fields are missing !</div>

              <input type="submit" value="LET ME IN" />
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
