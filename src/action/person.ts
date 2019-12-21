import { call, put } from "redux-saga/effects";
import { ActionTypes } from "../constant/hello";

const api = (url: string) => fetch(url).then(res => res.json());

export function* fetchPerson() {
  try {
    const person = yield call(api, "https://swapi.co/api/people");

    yield put({ type: ActionTypes.HELLO_REQUEST, data: person.results });
  } catch (e) {
    throw new Error(e.message);
  }
}
