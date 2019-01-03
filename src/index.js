import { signIn, signOut, setHandler } from './auth';
import { rendering, renderMapImg } from './render';
import { getMap } from './map';

$('#signIn').on('click', function(){
    signIn();
});

$('#signOut').on('click', function(){
    signOut();
});

$('#sendLocation').on('click', function(){
    getMap();
})

setHandler();
rendering();
renderMapImg();