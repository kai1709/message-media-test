import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const configureStore = (reducers: any) => {
  const middlewares = [thunk];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );

  return createStoreWithMiddleware(reducers);
}
