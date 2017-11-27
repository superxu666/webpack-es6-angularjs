(function () {
  var controllerModule = angular.module('controllerModule', ['serviceModule'])
  controllerModule.controller('mainCtrl', ['service' ,function (service) {
    this.name = 'Bob'
    this.job = service.job
  }])
})()