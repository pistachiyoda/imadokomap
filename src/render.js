import { vm } from './view_model';

export function rendering() {
    if ( vm.loggedIn == true ) {
        $('.beforeLogin').hide();
        $('.afterLogin').show();
        renderUserInfo();
        renderMessages();
    } else {
        $('.beforeLogin').show();
        $('.afterLogin').hide();
    }
}

function renderUserInfo(){
    if (!vm.user) return;
    var userName = vm.user.displayName;
    var userphotoURL = vm.user.photoURL;
    $('.userName').html(`
    <span>${userName}</span>
    `);
    $('.userPhoto').html(`
    <img src="${userphotoURL}"></img>
    `);
}

function renderMessages() {
    const messages = vm.messages;
    const apiKey = 'AIzaSyB9pk2FwYXIw6wEAo75LDPnRnu9B1yQZy4';
    const baseURL = 'https://maps.googleapis.com/maps/api/staticmap';

    $('#messageList').html('');
    messages.forEach(message => {
        const params = new URLSearchParams({
            key: apiKey,
            center: `${message.lat},${message.lng}`,
            size: '700x400',
            zoom: 15,
            markers: `${message.lat},${message.lng}`
        });
        const url = `${baseURL}?${params.toString()}`;
        $('#messageList').append(
            `<div class='message'>
                <div class="messageWapper">
                    <img src='${message.userimg}'>
                    <span class="name">${message.username}</span>
                    <span class="date">${message.date}</span>
                </div>
                <p>今ココにいるよ！</p>
                <img src='${url}'></img>
            </div>`
        );
    });
}

export function renderMapImg() {
}