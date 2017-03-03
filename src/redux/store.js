import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { initialState } from './initialState';
import { REQUEST_CATS, RECEIVE_CATS, fetchCats } from './actions';
// import { fetchCatFacts, fetchCatPics } from './helpers';
// import { FETCH_CAT_FACTS, FETCH_CAT_PICS } from './actions';

const enhancer = compose(
  /* [middlewares], */
  persistState()
);

const reducer = (state, action) => {
  console.log('action, state:', action, state);
  switch (action.type) {
    // case FETCH_CAT_FACTS:
    //   return fetchCatFacts(state, action.payload);

    // case FETCH_CAT_PICS:
    //   return fetchCatPics(state, action.payload);

    // case FETCH_CATS:
    //   return fetchCats(state, action.payload);

    case REQUEST_CATS:
      return Object.assign({}, state, { isFetchingCats: true });

    case RECEIVE_CATS:
      return Object.assign({}, state, { isFetchingCats: false }, action.payload);

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, enhancer);

fetchCats()(store.dispatch);
