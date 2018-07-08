import { CREATE_ISSUE } from '../actions/actions'
import { database } from '../../data/myFirebase'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

function createIssueInFirebase(action) {
    return new Promise(function (resolve, reject) {
        var rootRef = database.ref();
        var issuesList = rootRef.child("Yojaka/duke79/Issues/");
        var issue = {
            title: action.title,
            comment: action.comment
        }
        issuesList.push(issue)
        resolve();
    });
}

function* onCreateIssue(action) {
    try {
        yield call(createIssueInFirebase, action);
        yield put({ type: CREATE_ISSUE + "_SUCCEEDED" });
    } catch (e) {
        yield put({ type: CREATE_ISSUE + "_FAILED" });
    }
}

export const NewIssueSaga = [
    takeLatest(CREATE_ISSUE, onCreateIssue)
]

export function NewIssueReducer(state, action) {
    switch (action.type) {
        case CREATE_ISSUE + '_SUCCEEDED':
            return {};
        case CREATE_ISSUE + '_FAILED':
            return [];
        default:
            return [];
    }
}