
import Ctrl from './home.controller'

// 导出首页模块
export default angular.module('home', [])
.component('home', {
  template: '<h1 ng-click="ctrl.test">hello</h1>',
  controller: Ctrl,
  controllerAs: 'ctrl'
})
.name