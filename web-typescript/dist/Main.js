/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/MainController */ \"./src/controllers/MainController.ts\");\n/* harmony import */ var _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/LoginController */ \"./src/controllers/LoginController.ts\");\n\r\n\r\nvar Router = /** @class */ (function () {\r\n    function Router() {\r\n        this.mainElement = document.getElementById('main-container');\r\n    }\r\n    Router.prototype.handleRequest = function () {\r\n        console.log('handling rout: ', this.getRoute());\r\n        switch (this.getRoute()) {\r\n            case '/login':\r\n                if (this.mainElement) {\r\n                    var loginController = new _controllers_LoginController__WEBPACK_IMPORTED_MODULE_1__.LoginController();\r\n                    this.mainElement.append(loginController.creatView());\r\n                }\r\n                break;\r\n            default:\r\n                if (this.mainElement) {\r\n                    var mainController = new _controllers_MainController__WEBPACK_IMPORTED_MODULE_0__.MainController();\r\n                    this.mainElement.append(mainController.createView());\r\n                }\r\n                break;\r\n        }\r\n    };\r\n    Router.prototype.getRoute = function () {\r\n        return window.location.pathname;\r\n    };\r\n    return Router;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Router.ts?");

/***/ }),

/***/ "./src/controllers/BaseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/BaseController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseController\": () => (/* binding */ BaseController)\n/* harmony export */ });\nvar BaseController = /** @class */ (function () {\r\n    function BaseController() {\r\n        this.container = document.createElement('div');\r\n    }\r\n    BaseController.prototype.createElement = function (elementType, innerText) {\r\n        var element = document.createElement(elementType);\r\n        if (innerText) {\r\n            element.innerText = innerText;\r\n        }\r\n        return element;\r\n    };\r\n    return BaseController;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/BaseController.ts?");

/***/ }),

/***/ "./src/controllers/LoginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/LoginController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginController\": () => (/* binding */ LoginController)\n/* harmony export */ });\n/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseController */ \"./src/controllers/BaseController.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar LoginController = /** @class */ (function (_super) {\r\n    __extends(LoginController, _super);\r\n    function LoginController() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    LoginController.prototype.creatView = function () {\r\n        var title = this.createElement('h2', \"Please Login\");\r\n        var userNameLabel = this.createElement('label', \"UserName:\");\r\n        var userNameInput = this.createElement('input');\r\n        var passwordLabel = this.createElement('label', \"Password:\");\r\n        var passwordInput = this.createElement('input');\r\n        var button = this.createElement('button', \"Login\");\r\n        var breakElement = this.createElement('br');\r\n        this.container.append(title, userNameLabel, userNameInput, breakElement, passwordLabel, passwordInput, breakElement, button);\r\n        return this.container;\r\n    };\r\n    return LoginController;\r\n}(_BaseController__WEBPACK_IMPORTED_MODULE_0__.BaseController));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/LoginController.ts?");

/***/ }),

/***/ "./src/controllers/MainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/MainController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainController\": () => (/* binding */ MainController)\n/* harmony export */ });\nvar MainController = /** @class */ (function () {\r\n    function MainController() {\r\n    }\r\n    MainController.prototype.createView = function () {\r\n        var container = document.createElement('div');\r\n        var title = document.createElement('h2');\r\n        title.innerHTML = \"Welcome to Typescript\";\r\n        var article = document.createElement('div');\r\n        article.innerText = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Feugiat in fermentum posuere urna. Amet nisl purus in mollis nunc. Tellus orci ac auctor augue mauris augue. Dolor morbi non arcu risus quis varius quam quisque id. Et malesuada fames ac turpis egestas sed tempus. Eget mi proin sed libero enim sed faucibus. Turpis massa sed elementum tempus. Congue eu consequat ac felis donec.\";\r\n        var button = document.createElement('button');\r\n        button.innerHTML = \"Login\";\r\n        container.append(title, article, button);\r\n        return container;\r\n    };\r\n    return MainController;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/controllers/MainController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ \"./src/Router.ts\");\n\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        this.router = new _Router__WEBPACK_IMPORTED_MODULE_0__.Router();\r\n        console.log('main class');\r\n    }\r\n    Main.prototype.launched = function () {\r\n        this.router.handleRequest();\r\n    };\r\n    return Main;\r\n}());\r\n\r\nnew Main().launched();\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;