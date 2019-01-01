import { vm } from './view_model';
import { rendering } from './render';

export function signIn() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

export function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('sign out success');
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}

export function setHandler() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log('sign in');
            vm.loggedIn = true;
            rendering();
        } else {
            // No user is signed in.
            console.log('sign out');
            vm.loggedIn = false;
            rendering();
        }
    });
}