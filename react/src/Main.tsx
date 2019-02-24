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
          <Route exact path="/rant/:id" component={RantDetailsPage} />} />
          <Route exact path="/" component={RantListPage} />
          {/* <Route
            exact
            path="/rant/:id"
            render={props => <RantDetailsPage id={props.match.params.id} />}
          />
          <Route exact path="/" render={() => <RantListPage />} /> */}
        </Switch>
      </main>
    );
  }
}
