import React from 'react';
import { render } from 'react-dom';
import { CatFactGrid } from './components/CatFactGrid';
import { CommandBar } from './components/CommandBar';
import { Header } from './components/Header';
import './stylesheets/main.scss';

const App = () => (
  <div className="App">
    <Header />
    <CommandBar />
    <CatFactGrid />
  </div>
);

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app-container'));
