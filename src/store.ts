import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleware = compose(applyMiddleware(promise, thunk));
const composeEnhancers = compose;

const enhancer = composeEnhancers(
  middleware,
  // other store enhancers if any
);

const store = createStore(combineReducers(reducer), enhancer);

export type AppDispatch = typeof store.dispatch;

export default store;
