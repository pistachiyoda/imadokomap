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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signOut\", function() { return signOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHandler\", function() { return setHandler; });\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\nfunction signIn() {\n    var provider = new firebase.auth.FacebookAuthProvider();\n    provider.addScope('email');\n    firebase.auth().signInWithPopup(provider).then(function(result) {\n        // This gives you a Facebook Access Token. You can use it to access the Facebook API.\n        var token = result.credential.accessToken;\n        // The signed-in user info.\n        var user = result.user;\n        // ...\n    }).catch(function(error) {\n        // Handle Errors here.\n        var errorCode = error.code;\n        var errorMessage = error.message;\n        // The email of the user's account used.\n        var email = error.email;\n        // The firebase.auth.AuthCredential type that was used.\n        var credential = error.credential;\n        // ...\n    });\n}\n\nfunction signOut() {\n    firebase.auth().signOut().then(function() {\n        // Sign-out successful.\n        console.log('sign out success');\n    }).catch(function(error) {\n        // An error happened.\n        console.log(error);\n    });\n}\n\nfunction setHandler() {\n    firebase.auth().onAuthStateChanged(function(user) {\n        if (user) {\n            // User is signed in.\n            console.log('sign in');\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn = true;\n            Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\n        } else {\n            // No user is signed in.\n            console.log('sign out');\n            _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn = false;\n            Object(_render__WEBPACK_IMPORTED_MODULE_1__[\"rendering\"])();\n        }\n    });\n}\n\n//# sourceURL=webpack:///./src/auth.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"./src/auth.js\");\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\n\n\n$('#signIn').on('click', function(){\n    Object(_auth__WEBPACK_IMPORTED_MODULE_0__[\"signIn\"])();\n});\n\n$('#signOut').on('click', function(){\n    Object(_auth__WEBPACK_IMPORTED_MODULE_0__[\"signOut\"])();\n});\n\nObject(_auth__WEBPACK_IMPORTED_MODULE_0__[\"setHandler\"])();\nObject(_render__WEBPACK_IMPORTED_MODULE_2__[\"rendering\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: rendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rendering\", function() { return rendering; });\n/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_model */ \"./src/view_model.js\");\n\n\nfunction rendering() {\n    renderAuthButtons();\n}\n\nfunction renderAuthButtons() {\n    if ( _view_model__WEBPACK_IMPORTED_MODULE_0__[\"vm\"].loggedIn == true ) {\n        // login前の内容除去\n        $('#signIn').hide();\n        $('#signOut').show();\n    } else {\n        $('#signIn').show();\n        $('#signOut').hide();\n    }\n}\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/view_model.js":
/*!***************************!*\
  !*** ./src/view_model.js ***!
  \***************************/
/*! exports provided: vm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vm\", function() { return vm; });\nvar vm = {\n    loggedIn: false\n};\n\n//# sourceURL=webpack:///./src/view_model.js?");

/***/ })

/******/ });