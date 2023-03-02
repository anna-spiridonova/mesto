import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor (popupSelector, submitButtonHandler) {
    super(popupSelector);
    this._submitButtonHandler = submitButtonHandler;
    this._form = this._popup.querySelector('.popup__form');
  };

  open(card) {
    super.open();
    this._card = card
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButtonHandler(this._card);
    })
  };
}
