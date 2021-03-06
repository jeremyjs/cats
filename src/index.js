import React from 'react';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import _ from 'lodash';
import { store } from './redux';
import { CatFactGrid } from './components/CatFactGrid';
import { CommandBar } from './components/CommandBar';
import { Header } from './components/Header';
import './stylesheets/main.scss';

// const cats = [
//   {
//     imgUrl: 'http://24.media.tumblr.com/tumblr_mc5hrix2FW1qze0hyo1_500.jpg',
//     fact: 'A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure.',
//   },
//   {
//     imgUrl: 'http://24.media.tumblr.com/tumblr_m2m49nWcFn1qd477zo1_1280.jpg',
//     fact: 'There are approximately 60,000 hairs per square inch on the back of a cat and about 120,000 per square inch on its underside.',
//   },
//   {
//     imgUrl: 'http://25.media.tumblr.com/tumblr_m3gmknICUc1r73wdao1_500.jpg',
//     fact: 'Cats\' hearing stops at 65 khz (kilohertz); humans\' hearing stops at 20 khz.',
//   },
// ];

const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    cats: state.cats,
  };
};

const AppPresenter = ({ cats }) => (
  <div className="App">
    <Header />
    <CommandBar />
    <CatFactGrid cats={cats} />
  </div>
);

const App = connect(mapStateToProps)(AppPresenter);

if (module.hot) {
  module.hot.accept();
}

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app-container')
);
