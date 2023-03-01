import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelector, submitButtonHandler) {
    super(popupSelector);
    this._submitButtonHandler = submitButtonHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._saveButton = this._form.querySelector('.popup__input_type_save');
    this._saveValue = this._saveButton.value
  };

  _getInputValues() {
    const inputValues = {}
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues
  };

  close() {
    super.close();
    this._form.reset();
  };

  open(){
    super.open();
    this._saveButton.value = this._saveValue
  };

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButtonHandler(this._getInputValues());
      this._saveButton.value = 'Сохранение...';
      this.close()
    })
  };
}
