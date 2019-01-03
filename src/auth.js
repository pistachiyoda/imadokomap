import { vm } from './view_model';
import { rendering } from './render';
import { getMessages } from './map';

export function signIn() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
    }).catch(function(error) {
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
            vm.user = user;
            rendering();
            getMessages();
        } else {
            // No user is signed in.
            console.log('sign out');
            vm.loggedIn = false;
            vm.user = null;
            rendering();
        }
    });
}

