

route.$inject = ['$stateProvider', '$urlRouterProvider']

export default function route($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/login')
	$stateProvider.state('login', {
		url: '/login',
		template: '<login></login>'
	}).state('home', {
    url: '/home',
    template: '<home></home>'
  })

}