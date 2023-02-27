export default class UserInfo {
  constructor ({nameSelector, jobSelector, avatarSelector}){
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  };

  getUserInfo() {
    const info = {
      name: this._name.textContent,
      job: this._job.textContent
    }
    return info
  };

    setUserInfo(data) {
    this._name.textContent = data.name;
    this._job.textContent = data.about;
    this._avatar.src = data.avatar
  };
}


