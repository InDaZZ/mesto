export default class UserInfo {
  constructor({profileName, activity}) {
    this._profileName = profileName;
    this._activity = activity;
    this._avatar = document.querySelector('.profile__avatar')
  }
  getUserInfo() {
    const userInfo = {};

    userInfo.name = this._profileName.textContent;

    userInfo.about = this._activity.textContent;

    return userInfo;
  }
  
    setUserInfo(userInfo) {
      this._profileName.textContent = userInfo.name;
      this._activity.textContent = userInfo.about;
    }

    setAvatarInfo(newAvatar) {
      this._avatar.src = newAvatar
    }
  }
