// es5 写法
// (function () {
//   var controllerModule = angular.module('controllerModule', ['serviceModule'])
//   controllerModule.controller('mainCtrl', ['service' ,function (service) {
//     this.name = 'Bob'
//     this.job = service.job
//   }])
// })()



export default class controllerModule {
  constructor(service) {
    this.name = 'ken'
    this.job = service.job
  }
}

controllerModule.$inject = ['service']