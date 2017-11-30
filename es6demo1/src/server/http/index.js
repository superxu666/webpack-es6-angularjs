class http {
  constructor($http) {
    this.$http = $http
    this.options = {
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      }
    }
  }

  get(data, url, callback) {
    let gets = {method: 'GET', params: data, url: url}
    Object.assign(gets, this.options)
    console.log(gets)
    this.$http(gets).then(function(data) {
      callback(data)
    })
  }

  post(data, url, callback) {
    let posts = {method: 'GET', params: data, url: url}
    Object.assign(posts, this.options)
    this.$http(posts).then(function (data) {
      callback(data)
    })
  }
}


http.$inject = ['$http']

export default angular.module('http', []).service('http', http).name