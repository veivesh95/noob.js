import React, { Component } from 'react';
import { Spinner } from './elements/Spinner';
import Login from './Login';
import RantList from './RantList';

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
            <RantList />
            <div
              className="rant__add"
              title="Add Rant"
              onClick={this.openLoginModal}
            >
              +
            </div>
          </div>
        </section>
      );
    }
  }
}
