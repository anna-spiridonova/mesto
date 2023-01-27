import { image, imageTitle, openPopup, imagePopup } from './index.js';

class Card {
  constructor(link, name) {
    this._name = name;
    this._link = link;
  };

  _getTemplate() {
    const card = document
    .querySelector('#card-template')
    .content.querySelector('.card')
    .cloneNode(true);

    return card;
  };

  _setData() {
    const cardImage = this._newCard.querySelector('.card__image');
    cardImage.src = this._link;
    this._newCard.querySelector('.card__title').textContent = this._name;
    cardImage.alt = this._name;
  };

  _openImagePopup() {
    image.src = this._link;
    imageTitle.textContent = this._name;
    image.alt = this._name;
    openPopup(imagePopup);
  };

  _deleteCard() {
    this._newCard.remove();
  };

  _setEventListeners() {
    const cardLike = this._newCard.querySelector('.card__like-button');
    cardLike.addEventListener('click', () => {
      cardLike.classList.toggle('card__like-button_active');
    });

    const cardDelete = this._newCard.querySelector('.card__delete-button');
    cardDelete.addEventListener('click', () => { this._deleteCard() });

    const cardImage = this._newCard.querySelector('.card__image');
    cardImage.addEventListener('click', () => { this._openImagePopup() });
  };

  createCard() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setEventListeners();

    return this._newCard;
  };
}

export default Card;
