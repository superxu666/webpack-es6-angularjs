// es5 写法
// (function () {
//   var serviceModule = angular.module('serviceModule', [])
//   serviceModule.service('service', function () {
//     this.job = '前端开发'
//   })
// })()



export default class serviceModule {
  constructor() {
    this.job = '前端开发'
  }
}