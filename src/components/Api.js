export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
   
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log('Error(('))
  }

  postTask({ data }) {
    return fetch(this.url + '/cards',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  };

  getUserInfo() {
    return fetch(this.url + '/users/me', {
      headers: this.headers
    })
      .then(this._handleResponse)

  };

  getTaskCards() {
    return fetch(this.url + '/cards', {
      headers: this.headers
    })

      .then(this._handleResponse)
  }

  patchTaskProfileEditing({ data }) {
    return fetch(this.url + '/users/me',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(this._handleResponse)
  }

  deleteTask(_id) {
    return fetch(this.url + '/cards/' + _id,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )
      .then(this._handleResponse)
  }

  pushLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'PUT',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }

  deleteLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'DELETE',
      headers: this.headers,

    })
      .then(this._handleResponse)
  }
  pathTaskFromAvatar(avatar) {
    return fetch(this.url + '/users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar })
      }
    )
      .then(this._handleResponse)
  }
}




  