export const profileForm =
document.querySelector('.popup_type_profile')
.querySelector('.popup__form');

export const placeForm =
document.querySelector('.popup_type_place')
.querySelector('.popup__form');

export const avatarForm =
document.querySelector('.popup_type_avatar')
.querySelector('.popup__form');

export const addButton = document.querySelector('.profile__add-button');
export const editButton = document.querySelector('.profile__edit-button');
export const avatarButton = document.querySelector('.profile__avatar-button');
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');
export const cardsContainerSelector = '.cards';
export const imagePopupSelector = '.popup_type_image';
export const placePopupSelector = '.popup_type_place';
export const profilePopupSelector = '.popup_type_profile';
export const avatarPopupSelector = '.popup_type_avatar';
export const confirmPopupSelector = '.popup_type_confirm';

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__input_type_save',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};
