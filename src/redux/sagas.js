import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOAD_ISSUES } from './actions/actions'
import { getIssuesList } from './reducers/Issues'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loadIssues(action) {
    try {
        const user = yield call(getIssuesList, action);
        console.log(user);
        yield put({ type: "LOAD_ISSUES_SUCCEEDED", user: user });
    } catch (e) {
        yield put({ type: "LOAD_ISSUES_FAILED", message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//     yield takeEvery("LOAD_ISSUES", loadIssues);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    yield takeLatest("LOAD_ISSUES", loadIssues);
}

export default mySaga;