export default class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(response) {
    if (response.ok) {
      return response.json();
    } else Promise.reject(response.status);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  editUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleServerResponse);
  }

  editAvatar(data) {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleServerResponse);
  }

  postCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleServerResponse);
  }

  deleteCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  showLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/likes${cardId}`, {
      headers: this.headers,
    }).then(this._handleServerResponse);
  }

  addLikes(cardId) {
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  removeLikes(cardId) {
    return fetch(this._baseUrl + "/cards/likes/" + cardId, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
  }
}