export default class UserInfo {
  constructor ({nameSelector, jobSelector}){
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
  };

  getUserInfo() {
    const info = {
      name: this._name.textContent,
      job: this._job.textContent,
    }
    return info
  };

  setUserInfo(nameInput, jobInput) {
    this._name.textContent = nameInput;
    this._job.textContent = jobInput;
  };
}


