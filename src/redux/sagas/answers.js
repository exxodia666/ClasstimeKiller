import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { SEND_ANSWERS, showResult } from "../actions/send_answers";

const sendAnswers = (p) =>
  Axios.post(
    "http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/answer/",
    p
  );

function* workerLoadData(action) {
  const res = yield call(sendAnswers, action.payload);
  yield put(showResult(res));
}

export function* watchSendData() {
  try {
    yield takeEvery(SEND_ANSWERS, workerLoadData);
  } catch (e) {
    console.log(e);
  }
}
//const jsonData = `{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[[{"question":{"id":1,"quiz_id":1,"wording":"Whats up?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]}],[{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]]}`;
//console.log(JSON.parse(jsonData));