export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }

  addNewCard(name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }

  // deleteCard(id) {
  //   return fetch(`${this.baseUrl}/cards/${id}`, {
  //     headers: this._headers,
  //     method: 'DELETE'
  //   })
  //   .then(res => {
  //     return this._handleResponse(res)
  //   })
  // }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }

  editProfileInfo(name, about) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }

  editAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(res => {
      return this._handleResponse(res)
    })
  }
}
