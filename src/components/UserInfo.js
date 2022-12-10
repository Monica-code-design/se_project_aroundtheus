export default class UserInfo {
  constructor({ userNameSelector, userTitleSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitle = document.querySelector(userTitleSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userTitle: this._userTitle.textContent
    };
  }

  setUserInfo({ name, description }) {
    this._userName.textContent = name;
    this._userTitle.textContent = description;
  }
}