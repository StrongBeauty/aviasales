import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { listState } from './reducer/reducer';

const store = createStore(listState, composeWithDevTools());

export default store;
