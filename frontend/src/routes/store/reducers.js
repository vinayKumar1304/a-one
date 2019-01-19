import { combineReducers } from 'redux';
import locationReducer from './location';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    form: formReducer,
    app: appReducer,
    ...asyncReducers
  });
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}
export default makeRootReducer;
