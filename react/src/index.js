import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

function App() {
  return (
    <div className="App">
      <p className="header">Hello world</p>
      <h1>Eyepax JavaScript Hackathon</h1>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
