import React, { Component } from 'react';
import { Spinner } from './elements/Spinner';

interface RantListPageProps {
  posts?: any[];
}

interface RantListPageState {
  isLoading: boolean;
}

export default class RantListPage extends Component<
  RantListPageProps,
  RantListPageState
> {
  state: RantListPageState = {
    isLoading: true
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

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
