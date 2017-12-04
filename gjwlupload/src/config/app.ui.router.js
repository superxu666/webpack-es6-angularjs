

router.$inject = ['$stateProvider', '$urlRouterProvider']

export default function router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  })
}