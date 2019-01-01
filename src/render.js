import { vm } from './view_model';

export function rendering() {
    renderAuthButtons();
}

function renderAuthButtons() {
    if ( vm.loggedIn == true ) {
        // login前の内容除去
        $('#signIn').hide();
        $('#signOut').show();
    } else {
        $('#signIn').show();
        $('#signOut').hide();
    }
}