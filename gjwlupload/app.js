// 导入angular模块
import angular from 'angular'
// 导入路由模块
import uiRouter from 'angular-ui-router'
// 导入路由配置模块
import router from './src/config/app.ui.router'
// 导入自定义服务
import service from './src/service'
// 导入组件模块
import component from './src/component'

export default angular.module('app', [
  uiRouter,
  service,
  component
])
.config(router)