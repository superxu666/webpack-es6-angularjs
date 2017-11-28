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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(1);

var _controller2 = _interopRequireDefault(_controller);

var _serverce = __webpack_require__(2);

var _serverce2 = _interopRequireDefault(_serverce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// es5 写法  require导入是node的写法并非es6
// require('angular')

// var app = angular.module('app', ['controllerModule', 'serviceModule'])

// require('./controller')
// require('./serverce')


angular.module('app', []).controller('mainCtrl', _controller2.default).service('service', _serverce2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// es5 写法
// (function () {
//   var controllerModule = angular.module('controllerModule', ['serviceModule'])
//   controllerModule.controller('mainCtrl', ['service' ,function (service) {
//     this.name = 'Bob'
//     this.job = service.job
//   }])
// })()

var controllerModule = function controllerModule(service) {
  _classCallCheck(this, controllerModule);

  this.name = 'ken';
  this.job = service.job;
};

exports.default = controllerModule;


controllerModule.$inject = ['service'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// es5 写法
// (function () {
//   var serviceModule = angular.module('serviceModule', [])
//   serviceModule.service('service', function () {
//     this.job = '前端开发'
//   })
// })()

var serviceModule = function serviceModule() {
  _classCallCheck(this, serviceModule);

  this.job = '前端开发';
};

exports.default = serviceModule;

/***/ })
/******/ ]);