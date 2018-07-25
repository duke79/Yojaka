import { USER_LOGIN, USER_SIGN_UP } from '../actions/actions'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

import firebase from 'firebase';

function loginWithFirebase(action) {
    return new Promise(function (resolve, reject) {

        /* Maybe we don't need the IdToken here, this code only for reference */
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
            console.log(idToken);
        }).catch(function (error) {
            // Handle error
        });

        /* Return the user to be set in the redux state */
        resolve(firebase.auth().currentUser);
    });
}

function signupWithFirebase(action) {
    return new Promise(function (resolve, reject) {
        firebase.auth().createUserWithEmailAndPassword(action.email, action.password)
            .then(function (user) {
                var user = firebase.auth().currentUser;
                resolve(user);
            }
            )
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                throw error
            });

        // resolve("user_signup_success_res");
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
        /* Although firebase-auth-ui takes care of sign-up even with email/password,
           but maybe one day a custom UI could use this code as reference */
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
            return { "status": "SUCCEEDED", "user": action.res };
        case USER_LOGIN + '_FAILED':
            return { "status": "FAILED" };
        case USER_SIGN_UP + '_SUCCEEDED':
            return { "status": "SUCCEEDED", "user": action.res };
        case USER_SIGN_UP + '_FAILED':
            return { "status": "FAILED" };
        default:
            return { "status": "UNSET" };
    }
}