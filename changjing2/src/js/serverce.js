(function () {
  var serviceModule = angular.module('serviceModule', [])
  serviceModule.service('service', function () {
    this.job = '前端开发'
  })
})()