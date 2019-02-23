import React, { Component } from 'react';
import { Spinner } from './elements/Spinner';
import Login from './Login';
import RantList from './RantList';

import axios from 'axios';
import { NewRant } from './NewRant';

interface RantListPageProps {
  posts?: any[];
}

interface RantListPageState {
  isLoading: boolean;
  isLoggedOut: boolean;
  postList: any[];
  spinnerLoad: boolean;
  newRant: boolean;
}

export default class RantListPage extends Component<
  RantListPageProps,
  RantListPageState
> {
  state: RantListPageState = {
    isLoading: true,
    isLoggedOut: false,
    postList: [],
    spinnerLoad: false,
    newRant: false
  };

  componentDidMount(): void {
    let response = axios
      .get('https://api.devrant.thusitha.site/v1/post.list')
      .then((response: any) => {
        if (response.data.ok === true) {
          this.setState({ postList: response.data.posts, isLoading: false });
          // console.log(this.state.postList);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  openLoginModal = (): void => {
    const { isLoggedOut } = this.state;
    this.setState({ isLoggedOut: !isLoggedOut });
  };

  // toggleModal() {
  //   let loginStatus = this.state.isLoggedOut;
  //   this.setState({ isLoggedOut: !loginStatus });
  // }

  toggleNewRant() {
    const { newRant, isLoggedOut } = this.state;
    if (isLoggedOut) {
      this.setState({
        newRant: true
      });
    } else {
      this.setState({ isLoggedOut: true });
    }
  }

  render() {
    const {
      isLoading,
      isLoggedOut,
      postList,
      spinnerLoad,
      newRant
    } = this.state;
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <section className="main layout--center">
          <div className="main__content layout--wrapped">
            <Login
              isOpen={isLoggedOut}
              onClose={this.toggleNewRant}
              spinnerLoad={spinnerLoad}
            />
            <NewRant active={newRant} spinnerLoad={spinnerLoad} />
            <RantList rants={postList} />
            <div
              className="rant__add"
              title="Add Rant"
              onClick={() => {
                // this.toggleModal();
                this.toggleNewRant();
              }}
            >
              +
            </div>
          </div>
        </section>
      );
    }
  }
}
