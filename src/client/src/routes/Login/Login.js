import React from 'react';

import firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'

class Login extends React.Component {
    initFbUi() {
        //https://firebase.google.com/docs/auth/web/firebaseui?authuser=0
        // firebaseui.start('#firebaseui-auth-container', {
        //     signInOptions: [
        //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //         firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        //         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //         firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //         firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //         firebase.auth.GithubAuthProvider.PROVIDER_ID
        //     ],
        //     // Other config options...
        // });

        var uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    // User successfully signed in.
                    // Return type determines whether we continue the redirect automatically
                    // or whether we leave that to developer to handle.
                    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                        // Send token to your backend via HTTPS
                        // ...
                        console.log(idToken);
                    }).catch(function (error) {
                        // Handle error
                    });
                    return false; //no redirect-url
                },
                uiShown: function () {
                    // The widget is rendered.
                    // Hide the loader.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            // signInSuccessUrl: '<url-to-redirect-to-on-success>',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };

        //var ui = new firebaseui.auth.AuthUI(firebase.auth());
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    componentDidMount() {
        this.initFbUi();
    }
    render() {
        return <div>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
    }
}

export default Login;