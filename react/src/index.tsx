import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// app main styles (ui asset)
import './styles.scss';

// Main component
import Main from './Main';
import Header from './components/elements/Header';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Main />
      </Fragment>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
