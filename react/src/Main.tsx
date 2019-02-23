import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// Custom components (layout)
import Home from './components/Home';

export interface MainProps {
  //   history: any;
}

export interface MainState {
  //   title: string;
  //   description: string;
  //   author: string;
}

export default class Main extends Component<MainProps, MainState> {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
