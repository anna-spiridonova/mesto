export default class Card {
  constructor(data, cardTemplate, handleCardClick, handleDeleteButton, myId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._myId = myId;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
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

  deleteCard() {
    this._newCard.remove();
  }

  _setEventListeners() {
    this._cardLike = this._newCard.querySelector(".card__like-button");
    this._cardLike.addEventListener("click", () => {
      this._cardLike.classList.toggle("card__like-button_active");
    });

    this._cardDelete = this._newCard.querySelector(".card__delete-button");

    if (this._ownerId !== this._myId) {
      this._cardDelete.remove();
    }

    this._cardDelete.addEventListener("click", () => {
      this._handleDeleteButton(this._id);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".card__image");
    this._setData();
    this._likeCounter = this._newCard.querySelector('.card__like-counter');
    this._likeCounter.textContent = this._likes.length;
    this._setEventListeners();
    return this._newCard;
  }
}
