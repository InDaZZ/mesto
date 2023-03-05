const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(console.log('Error(('))
};

export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }
   
  handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log('Error(('))
  }

  getUserID () {
    return fetch(this.url + '/users/me', {
      headers: this.headers
    })
      .then(handleResponse)

  }

  postTask({ data }) {
    return fetch(this.url + '/cards',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(handleResponse)
  };

  getTask() {
    return fetch(this.url + '/users/me', {
      headers: this.headers
    })
      .then(this.handleResponse)

  };

  getTaskCards() {
    return fetch(this.url + '/cards', {
      headers: this.headers
    })

      .then(handleResponse)
  }

  patchTaskProfileEditing({ data }) {
    return fetch(this.url + '/users/me',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(handleResponse)
  }

  deleteTask(_id) {
    return fetch(this.url + '/cards/' + _id,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )
      .then(handleResponse)
  }

  pushLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'PUT',
      headers: this.headers,

    })
      .then(handleResponse)
  }

  deleteLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'DELETE',
      headers: this.headers,

    })
      .then(handleResponse)
  }
  pathTaskFromAvatar(avatar) {
    return fetch(this.url + '/users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar })
      }
    )
      .then(handleResponse)
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c',
    'Content-Type': 'application/json'
  }
});


