import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor (popupSelector, submitButtonHandler) {
    super(popupSelector);
    this._submitButtonHandler = submitButtonHandler;
    this._save = this._popup.querySelector('.popup__input_type_save');
  };

  setEventListeners() {
    super.setEventListeners();

    this._save.addEventListener('click', () => {
      this._submitButtonHandler();
      this.close()
    })
  };
}
