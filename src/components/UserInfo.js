export default class UserInfo {
  constructor({ userNameSelector, userTitleSelector, userAvatarSelector }) {
    this._userName = document.querySelector(userNameSelector);
    this._userTitle = document.querySelector(userTitleSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userTitle: this._userTitle.textContent,
      userAvatar: this._userAvatar.src
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._userName.textContent = name;
    this._userTitle.textContent = about;
    if (avatar) {
      this._userAvatar.src = avatar;
    }
  }
}