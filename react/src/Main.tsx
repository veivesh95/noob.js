import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// Custom components (layout)
import RantListPage from './components/RantListPage';
import RantDetailsPage from './components/RantDetailsPage';
import { Login } from './components/Login';

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
          <Route path="/" component={Login} />
          <Route path="/rant/:id" component={RantDetailsPage} />
        </Switch>
      </main>
    );
  }
}
