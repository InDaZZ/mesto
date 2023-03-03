export default class UserInfo {
  constructor({profileName, activity}) {
    this._profileName = profileName;
    this._activity = activity;
    this._avatar = document.querySelector('.profile__avatar')
  }
  getUserInfo() {
    const userInfo = {};

    userInfo.fullName = this._profileName.textContent;

    userInfo.activity = this._activity.textContent;

    return userInfo;
  }
  
    setUserInfo(userInfo) {
      this._profileName.textContent = userInfo.fullName;
      this._activity.textContent = userInfo.activity;
    }

    setAvatarInfo(newAvatar) {
      this._avatar.src = newAvatar
    }
  }
