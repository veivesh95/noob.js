import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

// app main styles (ui asset)
import './styles.scss';

// Main component
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
