import React, { Component } from 'react';
import { Spinner } from './elements/Spinner';

interface HomeProps {
  posts?: any[];
}

interface HomeState {
  isLoading: boolean;
}

export default class Home extends Component<HomeProps, HomeState> {
  state: HomeState = {
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div className="App">
            <h1 className="header">Hello world</h1>
          </div>
        </div>
      );
    }
  }
}
