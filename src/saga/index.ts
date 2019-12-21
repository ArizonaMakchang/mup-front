import { fork } from "redux-saga/effects";
import { ActionTypes } from "../constant/hello";
import { fetchPerson } from "../action/person";

function* root() {
  yield fork(fetchPerson);
}

export default root;
