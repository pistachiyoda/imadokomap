/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! exports provided: signIn, signOut, setHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signOut\", function() { return signOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHandler\", function() { return setHandler; });\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\n\n\nfunction signIn() {\n    var provider = new firebase.auth.FacebookAuthProvider();\n    provider.addScope('email');\n    firebase.auth().signInWithPopup(provider).then(function(result) {\n    }).catch(function(error) {\n    });\n}\n\nfunction signOut() {\n    firebase.auth().signOut().then(function() {\n        // Sign-out successful.\n        console.log('sign out success');\n    }).catch(function(error) {\n        // An error happened.\n        console.log(error);\n    });\n}\n\nfunction setHandler() {\n    firebase.auth().onAuthStateChanged(function(user) {\n        if (user) {\n            // User is signed in.\n            console.log('sign in');\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn = true;\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].user = user;\n            Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\n            Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"getMessages\"])();\n        } else {\n            // No user is signed in.\n            console.log('sign out');\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn = false;\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].user = null;\n            Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\n\n\n$('#signIn').on('click', function(){\n    Object(_auth__WEBPACK_IMPORTED_MODULE_0__[\"signIn\"])();\n});\n\n$('#signOut').on('click', function(){\n    Object(_auth__WEBPACK_IMPORTED_MODULE_0__[\"signOut\"])();\n});\n\n$('#sendLocation').on('click', function(){\n    Object(_map__WEBPACK_IMPORTED_MODULE_2__[\"getMap\"])();\n})\n\nObject(_auth__WEBPACK_IMPORTED_MODULE_0__[\"setHandler\"])();\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\nObject(_render__WEBPACK_IMPORTED_MODULE_1__[\"renderMapImg\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: getMap, mapsInit, mapsError, set, getMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMap\", function() { return getMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapsInit\", function() { return mapsInit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapsError\", function() { return mapsError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessages\", function() { return getMessages; });\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\n//Main:位置情報を取得する処理 //getCurrentPosition :or: watchPosition\r\nfunction getMap(){\r\n    navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);\r\n}\r\n\r\n//1．位置情報の取得に成功した時の処理\r\nfunction mapsInit(position) {\r\n    //lat=緯度、lng=経度 を取得\r\n    const lat = position.coords.latitude;\r\n    const lng = position.coords.longitude;\r\n    sendLocation(lat, lng);\r\n}\r\n\r\n//2． 位置情報の取得に失敗した場合の処理\r\nfunction mapsError(error) {\r\n    let e = '';\r\n    if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）\r\n        e = '位置情報が許可されてません';\r\n    }\r\n    if (error.code == 2) { //2＝現在地を特定できない\r\n        e = '現在位置を特定できません';\r\n    }\r\n    if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合\r\n        e = '位置情報を取得する前にタイムアウトになりました';\r\n    }\r\n    alert('エラー：' + e);\r\n}\r\n\r\n//3.位置情報取得オプション\r\nvar set ={\r\n    enableHighAccuracy: true, //より高精度な位置を求める\r\n    maximumAge: 20000,        //最後の現在地情報取得が20秒以内であればその情報を再利用する設定\r\n    timeout: 10000            //10秒以内に現在地情報を取得できなければ、処理を終了\r\n};\r\n\r\nfunction sendLocation(lat, lng) {\r\n    // MSG送受信準備\r\n    // ref();によりリアルタイム通院ができるようになる。\r\n    var newPostRef = firebase.database().ref();\r\n    // メッセージをfirebase上のDBにpush\r\n    // 表示日時の取得とフォーマット\r\n    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat\r\n    var date = new Date();\r\n    var options = {\r\n        year: 'numeric', month: 'numeric', day: 'numeric',\r\n        hour: 'numeric', minute: 'numeric',\r\n        hour12: false\r\n    };\r\n    var formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(date);\r\n    \r\n    // Facebookでのユーザー名を取得\r\n    var userName = firebase.auth().currentUser.displayName;\r\n    \r\n    // Facebookでのプロフィール写真を取得\r\n    var userImg = firebase.auth().currentUser.photoURL;\r\n\r\n    newPostRef.push({\r\n        date: formattedDate,\r\n        username: userName,\r\n        userimg: userImg,\r\n        lat: lat,\r\n        lng: lng\r\n    });\r\n}\r\n\r\nfunction getMessages() {\r\n    var newPostRef = firebase.database().ref();\r\n    newPostRef.on('child_added', function(data) {\r\n        _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].messages.push(data.val());\r\n        Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\r\n    });\r\n    console.log(_view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].messages);\r\n}\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: rendering, renderMapImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rendering\", function() { return rendering; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMapImg\", function() { return renderMapImg; });\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n\n\nfunction rendering() {\n    if ( _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn == true ) {\n        $('.beforeLogin').hide();\n        $('.afterLogin').show();\n        renderUserInfo();\n        renderMessages();\n    } else {\n        $('.beforeLogin').show();\n        $('.afterLogin').hide();\n    }\n}\n\nfunction renderUserInfo(){\n    if (!_view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].user) return;\n    var userName = _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].user.displayName;\n    var userphotoURL = _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].user.photoURL;\n    $('.userName').html(`\n    <span>${userName}</span>\n    `);\n    $('.userPhoto').html(`\n    <img src=\"${userphotoURL}\"></img>\n    `);\n}\n\nfunction renderMessages() {\n    const messages = _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].messages;\n    const apiKey = 'AIzaSyB9pk2FwYXIw6wEAo75LDPnRnu9B1yQZy4';\n    const baseURL = 'https://maps.googleapis.com/maps/api/staticmap';\n\n    $('#messageList').html('');\n    messages.forEach(message => {\n        const params = new URLSearchParams({\n            key: apiKey,\n            center: `${message.lat},${message.lng}`,\n            size: '700x400',\n            zoom: 15,\n            markers: `${message.lat},${message.lng}`\n        });\n        const url = `${baseURL}?${params.toString()}`;\n        $('#messageList').append(\n            `<div class='message'>\n                <div class=\"messageWapper\">\n                    <img src='${message.userimg}'>\n                    <span class=\"name\">${message.username}</span>\n                    <span class=\"date\">${message.date}</span>\n                </div>\n                <p>今ココにいるよ！</p>\n                <img src='${url}'></img>\n            </div>`\n        );\n    });\n}\n\nfunction renderMapImg() {\n}\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/view_model.js":
/*!***************************!*\
  !*** ./src/view_model.js ***!
  \***************************/
/*! exports provided: vm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vm\", function() { return vm; });\nvar vm = {\n    loggedIn: false,\n    user: null,\n    // メッセージ一覧\n    messages: [] \n};\n\n//# sourceURL=webpack:///./src/view_model.js?");

/***/ })

/******/ });