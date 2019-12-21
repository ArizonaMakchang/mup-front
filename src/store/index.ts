import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import hello from "./helloReduer";
import sagas from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    hello
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
