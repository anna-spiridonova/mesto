import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__image-container');
    this._image = this._popup.querySelector('.popup__image');
    this._title = this._popup.querySelector('.popup__image-title');
  };

  open(element){
    super.open();
    this._image.src = element.link;
    this._title.textContent = element.name;
    this._image.alt = element.name;
  };
}
