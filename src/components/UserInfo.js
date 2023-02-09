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
    // nameInput.value = this._name.textContent;
    // jobInput.value = this._job.textContent;

  // nameInput.value = nameProfile.textContent;
  // jobInput.value = jobProfile.textContent;
    //return UserInfo;
  };

  setUserInfo(nameInput, jobInput) {
    this._name.textContent = nameInput;
    this._job.textContent = jobInput;
  };
}


