export default class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".card")
      .cloneNode(true);

    return card;
  }

  _setData() {
    this._cardImage.src = this._link;
    this._newCard.querySelector(".card__title").textContent = this._name;
    this._cardImage.alt = this._name;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _setEventListeners() {
    this._cardLike = this._newCard.querySelector(".card__like-button");
    this._cardLike.addEventListener("click", () => {
      this._cardLike.classList.toggle("card__like-button_active");
    });

    const cardDelete = this._newCard.querySelector(".card__delete-button");
    cardDelete.addEventListener("click", () => {
      this._deleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".card__image");
    this._setData();
    this._setEventListeners();

    return this._newCard;
  }
}
