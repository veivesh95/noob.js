import React, { Component, Fragment } from 'react';
import { Spinner } from './elements/Spinner';
import Login from './Login';
import RantList from './RantList';

import axios from 'axios';
import RantDetailsPage from './RantDetailsPage';

interface RantListPageProps {
  posts?: any[];
  history?: any;
}

interface RantListPageState {
  isLoading: boolean;
  isLoggedOut: boolean;
  postList: any[];
  isRantListPage: boolean;
  isDetailPage: boolean;
  id: string;
}

export default class RantListPage extends Component<
  RantListPageProps,
  RantListPageState
> {
  state: RantListPageState = {
    isLoading: true,
    isLoggedOut: false,
    postList: [],
    isDetailPage: false,
    isRantListPage: true,
    id: ''
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

  toggleModal = () => {
    let loginStatus = this.state.isLoggedOut;
    this.setState({ isLoggedOut: !loginStatus });
  };

  openDetail = () => {
    this.setState({
      ...this.state,
      isRantListPage: false,
      isDetailPage: true
    });
    this.props.history.push({
      pathname: `/rant/${this.state.id}`
      // state: { selectedRole: selected }
    });
  };

  render() {
    const { isLoading, isLoggedOut, postList } = this.state;
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <section className="main layout--center">
            <div className="main__content layout--wrapped">
              <RantList rants={postList} openDetail={this.openDetail} />
              <div
                className="rant__add"
                title="Add Rant"
                onClick={this.openLoginModal}
              >
                +
              </div>
            </div>
          </section>

          {/* {this.state.isRantListPage ? (
            <section className="main layout--center">
              <div className="main__content layout--wrapped">
                <RantList rants={postList} openDetail={this.openDetail} />
                <div
                  className="rant__add"
                  title="Add Rant"
                  onClick={this.openLoginModal}
                >
                  +
                </div>
              </div>
            </section>
          ) : this.state.isDetailPage ? (
            <RantDetailsPage id={this.state.id} />
          ) : null} */}
        </Fragment>
      );
    }
  }
}
