import React, { Component, Fragment } from 'react';

interface HeaderProps {
  isLoggedIn?: boolean;
}

interface HeaderState {
  showProfile: boolean;
}

export default class Header extends Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    showProfile: this.props.isLoggedIn ? this.props.isLoggedIn : false
  };

  render() {
    let header = null;
    const { showProfile } = this.state;
    header = (
      <section className="header layout--center">
        <div className="header__content layout--wrapped">
          <div className="brand">
            <a href="/">
              <div className="brand__name">
                <span>#</span>DEVRANT
              </div>
            </a>
          </div>

          <div
            className="profile layout--center"
            style={!this.state.showProfile ? { display: 'none' } : {}}
          >
            <div className="profile__picture">
              <svg height="36" width="36">
                <circle cx="18" cy="18" r="18" fill="#5c5f6f" />
              </svg>
            </div>
            <div className="profile__name">Elon</div>
          </div>

          <div className="join">
            {!showProfile ? <span>Join</span> : <span>Sign Out</span>}
          </div>
        </div>
      </section>
    );

    return <Fragment>{header}</Fragment>;
  }
}
