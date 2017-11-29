import angular from 'angular'
import uiRouter from 'angular-ui-router'
import component from './src/components'
import appRouter from './src/config/app.router'

export default angular.module('app', [component, uiRouter]).config(appRouter).name