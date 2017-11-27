webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)

var app = angular.module('app', ['controllerModule', 'serviceModule'])

__webpack_require__(3)
__webpack_require__(4)

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

(function () {
  var controllerModule = angular.module('controllerModule', ['serviceModule'])
  controllerModule.controller('mainCtrl', ['service' ,function (service) {
    this.name = 'Bob'
    this.job = service.job
  }])
})()

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function () {
  var serviceModule = angular.module('serviceModule', [])
  serviceModule.service('service', function () {
    this.job = '前端开发'
  })
})()

/***/ })
],[1]);