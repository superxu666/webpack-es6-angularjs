// es5 写法  require导入是node的写法并非es6
// require('angular')

// var app = angular.module('app', ['controllerModule', 'serviceModule'])

// require('./controller')
// require('./serverce')

import angular from 'angular'
import controllerModule from './controller'
import service from './serverce'

angular.module('app', [])
.controller('mainCtrl', controllerModule)
.service('service', service)