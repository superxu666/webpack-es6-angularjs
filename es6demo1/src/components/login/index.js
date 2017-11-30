
import tem from './login.html'
import './login.css'
import ctrl from './login'

// require("!style-loader!css-loader!./login.css")

export default angular.module('login', [])
.component('login', {
  template: tem,
  controller: ctrl,
  controllerAs: 'loginCtrl'
}).name