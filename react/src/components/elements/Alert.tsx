import React, { Component } from 'react';

export default class Alert extends Component<AlertProps, AlertState> {
  constructor(props: AlertProps) {
    super(props);
  }

  state: AlertState = {
    showAlert: this.props.showAlert
  };

  closePopup() {
    this.setState({ showAlert: !this.state.showAlert });
  }

  render() {
    return (
      <div className={this.state.showAlert ? 'popup popup--open' : 'popup'}>
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
                {this.props.title}
              </div>
              <div className="form__description">
                {/* You can not vote on your own post :) */}
                {this.props.description}
              </div>
              <form name="alert">
                <div className="alert">
                  <input type="submit" value="OK" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface AlertProps {
  showAlert: boolean;
  title: string;
  description: string;
}

interface AlertState {
  showAlert: boolean;
}
