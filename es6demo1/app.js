import angular from 'angular'
import uiRouter from 'angular-ui-router'

import component from './src/components'
import appRouter from './src/config/app.router'
import service from './src/server'
import './src/assets/css/reset.css'

console.log(component)

export default angular.module('app', [component, uiRouter, service]).config(appRouter).name