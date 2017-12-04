class http {
  constructor ($http) {
    this.$http = $http
    this.options = {
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      }
    }
  }

  // 自定义http请求 Get
  get (url, data, callback) {
    let gets = {method: 'GET', params: data, url: url}
    Object.assign(gets, this.options)
    this.$http(gets).then(function (data) {
        console.log(data)
    })
  }
}

http.$inject = ['$http']

export default angular.module('http', [])
.service('http', http)
.name