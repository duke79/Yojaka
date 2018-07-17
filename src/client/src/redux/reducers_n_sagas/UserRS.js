import { USER_LOGIN, USER_SIGN_UP } from '../actions/actions'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import firebase from 'firebase';

function loginWithFirebase(action) {
    return new Promise(function (resolve, reject) {
        firebase.auth().signInWithEmailAndPassword(action.email, action.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            throw error
        });

        resolve("user_login_success_res");
    });
}

function signupWithFirebase(action) {
    return new Promise(function (resolve, reject) {
        firebase.auth().createUserWithEmailAndPassword(action.email, action.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            throw error
        });

        resolve("user_signup_success_res");
    });
}

function* onLogin(action) {
    try {
        const res = yield call(loginWithFirebase, action);
        yield put({ type: USER_LOGIN + "_SUCCEEDED", res: res });
    } catch (e) {
        yield put({ type: USER_LOGIN + "_FAILED", error: e });
    }
}

function* onSignup(action) {
    try {
        const res = yield call(signupWithFirebase, action);
        yield put({ type: USER_SIGN_UP + "_SUCCEEDED", res: res });
    } catch (e) {
        yield put({ type: USER_SIGN_UP + "_FAILED", error: e });
    }
}

export const UserSaga = [
    takeLatest(USER_LOGIN, onLogin),
    takeLatest(USER_SIGN_UP, onSignup)
]

export function UserReducer(state, action) {
    switch (action.type) {
        case USER_LOGIN + '_SUCCEEDED':
            return action.res;
        case USER_LOGIN + '_FAILED':
            return action.error;
        case USER_SIGN_UP + '_SUCCEEDED':
            return action.res;
        case USER_SIGN_UP + '_FAILED':
            return action.error;
        default:
            return [];
    }
}