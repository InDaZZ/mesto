const hnadleResponse = (res) => {
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

  postTask({ data }) {
    return fetch(this.url,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(hnadleResponse)
  };

  getTask() {
    return fetch(this.url, {
      headers: this.headers
    })
      .then(hnadleResponse)

  };

  getTaskCards() {
    return fetch(this.url, {
      headers: this.headers
    })

      .then(hnadleResponse)
  }

  patchTaskProfileEditing({ data }) {
    return fetch(this.url,
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      }
    )
      .then(hnadleResponse)
  }

  deleteTask(_id) {
    return fetch(this.url + '/cards/' + _id,
      {
        method: 'DELETE',
        headers: this.headers,
      }
    )
      .then(hnadleResponse)
  }

  pushLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'PUT',
      headers: this.headers,

    })
      .then(hnadleResponse)
  }

  deleteLike(_id) {
    return fetch(this.url + '/cards/' + _id + '/likes', {
      method: 'DELETE',
      headers: this.headers,

    })
      .then(hnadleResponse)
  }
  pathTaskFromAvatar(avatar) {
    return fetch(this.url + '/users/me/avatar',
      {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({ avatar })
      }
    )
      .then(hnadleResponse)
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c',
    'Content-Type': 'application/json'
  }
});


