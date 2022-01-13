import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/auth-reducer';
import { backgroundImageReducer } from './reducers/backgroundImage-reducer';
import { errorsReducer } from './reducers/errors-reducer';
import { redirectReducer } from './reducers/redirect-reducer';
import { tripsReducer } from './reducers/trips-reducer';

const reducer = combineReducers({
  auth: authReducer,
  backgroundImage: backgroundImageReducer,
  errors: errorsReducer,
  redirect: redirectReducer,
  trips: tripsReducer,
});

export type RootReducerType = typeof reducer;

export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(reducer, composeWithDevTools());

export default store;
