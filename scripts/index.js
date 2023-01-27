import Card from './Card.js';
import initialCards from './cards.js';
import FormValidator from "./FormValidator.js"
import validationConfig from './validationConfig.js';

//попапы
const popupList = Array.from(document.querySelectorAll('.popup'));
const popupContainerList = Array.from(document.querySelectorAll('.popup__container'));
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const imagePopup = document.querySelector('.popup_type_image');

//попап картинки
const image = imagePopup.querySelector('.popup__image');
const imageTitle = imagePopup.querySelector('.popup__image-title');

//кнопки
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const closeBtnList = Array.from(document.querySelectorAll('.popup__close-button'));

//форма профиля
const profileForm = profilePopup.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const jobInput = profileForm.querySelector('.popup__input_type_job');
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

//форма добавления карточки
const placeForm = placePopup.querySelector('.popup__form');
const imageInput = placeForm.querySelector('.popup__input_type_link');
const titleInput = placeForm.querySelector('.popup__input_type_title');

const cardsContainer = document.querySelector('.cards');

//открытие и закрытие попапов
function openPopup(popup) {
  document.addEventListener('keydown', closeByEscape);
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  document.removeEventListener('keydown', closeByEscape);
  popup.classList.remove('popup_opened');
};

function closeByEscape(evt) {
  if (evt.key === 'Escape'){
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  };
};

//сохранить профиль
function submitProfile (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
};

//6 карточек при загрузке
initialCards.forEach(function(item) {
  const card = new Card(item.link, item.name);
  cardsContainer.append(card.createCard());
});

//добвить карточку
function addCard(imageInput, titleInput) {
  const card = new Card(imageInput.value, titleInput.value);
  cardsContainer.prepend(card.createCard());

  imageInput.value = '';
  titleInput.value = '';
};

//создать карточку
function submitPlace (evt) {
  evt.preventDefault();
  addCard(imageInput, titleInput);
  closePopup(placePopup);
};

//слушатели кнопок
addButton.addEventListener('click', function() {
  placeFormValidator.disableCardSubmit();
  openPopup(placePopup);
});

editButton.addEventListener('click', function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(profilePopup);
});

closeBtnList.forEach((closeButton) => {
  closeButton.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  });
});

popupList.forEach((popupElement) => {
  popupElement.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
  });
});

popupContainerList.forEach((popupContainer) => {
  popupContainer.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
});

imagePopup.querySelector('.popup__image-container').addEventListener('click', function(event) {
  event.stopPropagation();
});

profileForm.addEventListener('submit', submitProfile);
placeForm.addEventListener('submit', submitPlace);

//валидация
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();


export { image, imageTitle, openPopup, imagePopup };
