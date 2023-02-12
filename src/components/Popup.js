export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._popupContainer = this._popup.querySelector(".popup__container");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("mousedown", () => {
      this.close();
    });
    this._popupContainer.addEventListener("mousedown", (evt) => {
      evt.stopPropagation();
    });
  }
}
