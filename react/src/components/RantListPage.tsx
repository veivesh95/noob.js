import React, { Component } from 'react';
import { Spinner } from './elements/Spinner';
import Login from './Login';

interface RantListPageProps {
  posts?: any[];
}

interface RantListPageState {
  isLoading: boolean;
  isLoggedOut: boolean;
}

export default class RantListPage extends Component<
  RantListPageProps,
  RantListPageState
> {
  state: RantListPageState = {
    isLoading: false,
    isLoggedOut: false
  };

  componentDidMount(): void {}

  openLoginModal = (): void => {
    const { isLoggedOut } = this.state;
    this.setState({ isLoggedOut: !isLoggedOut });
  };

  toggleModal = () => {
    let loginStatus = this.state.isLoggedOut;
    this.setState({ isLoggedOut: !loginStatus });
  };

  render() {
    const { isLoading, isLoggedOut } = this.state;
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <section className="main layout--center">
          <div className="main__content layout--wrapped">
            <Login isOpen={isLoggedOut} onClose={this.toggleModal} />

            <div className="post-list">
              {/* TODO: Rant Post component */}
              <article className="post">
                <div className="post__inner">
                  <div className="score">
                    <div className="score__up layout--center">++</div>
                    <div className="score__board layout--center">100</div>
                    <div className="score__down layout--center">--</div>
                  </div>
                  <div className="post__body">Hello World... </div>
                </div>
                <div className="post__footer">
                  <div className="post__time">2m ago</div>
                  <div className="post__comments">
                    <svg className="icon" viewBox="0 0 31 32">
                      <path
                        d="M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781 
                                0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657 
                                8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0 
                                3.922-2.61 7.23-6.186 8.294z"
                      />
                    </svg>
                    23
                  </div>
                </div>
              </article>

              {/* New rant button */}
              <div
                className="rant__add"
                title="Add Rant"
                onClick={this.openLoginModal}
              >
                +
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
