import { signIn, signOut, setHandler } from './auth';
import { vm } from './view_model';
import { rendering } from './render';

$('#signIn').on('click', function(){
    signIn();
});

$('#signOut').on('click', function(){
    signOut();
});

setHandler();
rendering();