import Card from '../components/Card.js';
import initialCards from '../components/cards.js';
import FormValidator from "../components/FormValidator.js"
import validationConfig from '../components/validationConfig.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const profileForm =
document.querySelector('.popup_type_profile')
.querySelector('.popup__form');

const placeForm =
document.querySelector('.popup_type_place')
.querySelector('.popup__form');

//валидация
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const cardsContainerSelector = '.cards';

const imagePopupSelector = '.popup_type_image'
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

const userInfo = new UserInfo ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});

function createNewCard(item) {
  const card = new Card(item, '#card-template', () => { imagePopup.open(item) });
  const cardElement = card.generateCard();
  return cardElement
};

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createNewCard(item));
  }
}, cardsContainerSelector);

cardList.renderItems();

const placePopupSelector = '.popup_type_place';
const popupTypePlace = new PopupWithForm(placePopupSelector, (inputData)=>{
  cardList.addItem(createNewCard(inputData));
});
popupTypePlace.setEventListeners();

const profilePopupSelector = '.popup_type_profile'
const popupTypeProfile = new PopupWithForm(profilePopupSelector, (inputData) => {
  userInfo.setUserInfo(inputData.name, inputData.job)}
);
popupTypeProfile.setEventListeners();

addButton.addEventListener('click', () => {
  placeFormValidator.disableCardSubmit();
  popupTypePlace.open();
});

editButton.addEventListener('click', () => {
  const {name, job} = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  popupTypeProfile.open();
});
