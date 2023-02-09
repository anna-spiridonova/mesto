import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js"
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileForm,
  placeForm,
  addButton,
  editButton,
  nameInput,
  jobInput,
  cardsContainerSelector,
  imagePopupSelector,
  placePopupSelector,
  profilePopupSelector,
  initialCards,
  validationConfig
} from '../utils/constants.js'

//валидация
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();

//класс попапа картинки карточки
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//класс с данными профиля
const userInfo = new UserInfo ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job'
});

//создать карточку
function createNewCard(item) {
  const card = new Card(item, '#card-template', () => { imagePopup.open(item) });
  const cardElement = card.generateCard();
  return cardElement
};

//класс добавления карточек на страницу
const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createNewCard(item));
  }
}, cardsContainerSelector);
cardList.renderItems();

//попап с формой добавления карточки
const popupTypePlace = new PopupWithForm(placePopupSelector, (inputData)=>{
  cardList.addItem(createNewCard(inputData));
});
popupTypePlace.setEventListeners();

//попап с формой редактора профиля
const popupTypeProfile = new PopupWithForm(profilePopupSelector, (inputData) => {
  userInfo.setUserInfo(inputData.name, inputData.job)}
);
popupTypeProfile.setEventListeners();

//слушатель кнопки добавления карточки
addButton.addEventListener('click', () => {
  placeFormValidator.disableCardSubmit();
  popupTypePlace.open();
});

//слушатель кнопки редактора профиля
editButton.addEventListener('click', () => {
  const {name, job} = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  popupTypeProfile.open();
});
