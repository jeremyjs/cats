import React from 'react';
import { render } from 'react-dom';
import './stylesheets/main.scss';

const App = () => (
  <div className="App">
    <h1>Meow, World!</h1>
  </div>
);

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app'));
