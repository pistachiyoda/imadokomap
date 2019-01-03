import { vm } from './view_model';
import { rendering } from './render';

//Main:位置情報を取得する処理 //getCurrentPosition :or: watchPosition
export function getMap(){
    navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
}

//1．位置情報の取得に成功した時の処理
export function mapsInit(position) {
    //lat=緯度、lng=経度 を取得
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    sendLocation(lat, lng);
}

//2． 位置情報の取得に失敗した場合の処理
export function mapsError(error) {
    let e = '';
    if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
        e = '位置情報が許可されてません';
    }
    if (error.code == 2) { //2＝現在地を特定できない
        e = '現在位置を特定できません';
    }
    if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
        e = '位置情報を取得する前にタイムアウトになりました';
    }
    alert('エラー：' + e);
}

//3.位置情報取得オプション
export var set ={
    enableHighAccuracy: true, //より高精度な位置を求める
    maximumAge: 20000,        //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
    timeout: 10000            //10秒以内に現在地情報を取得できなければ、処理を終了
};

function sendLocation(lat, lng) {
    // MSG送受信準備
    // ref();によりリアルタイム通院ができるようになる。
    var newPostRef = firebase.database().ref();
    // メッセージをfirebase上のDBにpush
    // 表示日時の取得とフォーマット
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    var date = new Date();
    var options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
        hour12: false
    };
    var formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(date);
    
    // Facebookでのユーザー名を取得
    var userName = firebase.auth().currentUser.displayName;
    
    // Facebookでのプロフィール写真を取得
    var userImg = firebase.auth().currentUser.photoURL;

    newPostRef.push({
        date: formattedDate,
        username: userName,
        userimg: userImg,
        lat: lat,
        lng: lng
    });
}

export function getMessages() {
    var newPostRef = firebase.database().ref();
    newPostRef.on('child_added', function(data) {
        vm.messages.push(data.val());
        rendering();
    });
    console.log(vm.messages);
}