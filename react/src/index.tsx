import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// app main styles (ui asset)
import './styles.scss';

// Main component
import Main from './Main';
import Header from './components/elements/Header';
import Login from './components/Login';
import { createBrowserHistory } from 'history';

interface AppProps {}
interface AppState {
  isLoggedOut: boolean;
}

export default class App extends Component<AppProps, AppState> {
  state: AppState = { isLoggedOut: false };
  constructor(props: AppProps) {
    super(props);
  }

  toggleModal = () => {
    console.log('Modal toggle');
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Login isOpen={this.state.isLoggedOut} onClose={this.toggleModal} />
          <Header />
          <Main />
        </Fragment>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
