


class loginCtrl {
  constructor(http) {
    this.name = 'anguldjs123qwasdfsdfe'
    this.http = http
  }

  login() {
    console.log(123)
    this.show = 'show'
    this.http.get({'receiver_contact': '13424502995'}, 'http://expressking.leanapp.cn/api/v1/order', function (data) {
      console.log(data)
    })
  }
}

loginCtrl.$inject = ['http']

export default loginCtrl