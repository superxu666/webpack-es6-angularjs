class homeCtrl {
  constructor (http) {
    this.http = http
  }

  test () {
    this.http('http://expressking.leanapp.cn/api/v1/order', {
      'receiver_contact': '13424502995'
    }, function (date) {
      console.log(date)
    })
  }
}

homeCtrl.$inject = ['http']

export default homeCtrl