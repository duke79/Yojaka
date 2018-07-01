// To mix sagas: https://github.com/redux-saga/redux-saga/issues/160
// To keep sagas only for async: https://github.com/redux-saga/redux-saga/issues/332

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { LOAD_ISSUES } from './actions/actions'
import { getIssuesList } from './reducers/Issues'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadIssues(action) {
    try {
        const list = yield call(getIssuesList, action);
        // console.log(list);
        yield put({ type: "LOAD_ISSUES_SUCCEEDED", list: list });
    } catch (e) {
        yield put({ type: "LOAD_ISSUES_FAILED", message: e.message });
    }
}

/*
  Starts loadIssues on each dispatched `LOAD_ISSUES` action.
  Allows concurrent fetches of IssuesList.
*/
// function* mySaga() {
//     yield takeEvery("LOAD_ISSUES", loadIssues);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of IssuesList. If "LOAD_ISSUES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
const mySaga = [
    takeLatest("LOAD_ISSUES", loadIssues),
    // takeLatest("ANOTHER_ACTION", anotherAction),
]

export default function* rootSaga() {
    yield all([
        ...mySaga,
        //   ...barSagas
    ])
}