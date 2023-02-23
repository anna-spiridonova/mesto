export default class Api {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers
  }

  getInitialCards() {
    return fetch(this.url, {
      headers: this.headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })

  }

  // createCard(data) {
  //   return fetch(this.url, {
  //     headers: this.headers,
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   })
  //   .then(handleResponse)
  // }

}
