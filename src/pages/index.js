import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js"
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileForm,
  placeForm,
  avatarForm,
  addButton,
  editButton,
  avatarButton,
  nameInput,
  jobInput,
  cardsContainerSelector,
  imagePopupSelector,
  placePopupSelector,
  profilePopupSelector,
  avatarPopupSelector,
  //initialCards,
  validationConfig
} from '../utils/constants.js';
import './index.css';
import Api from '../components/Api.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'fb38f326-6de2-4957-880b-2bd78fd7f96a',
    'Content-Type': 'application/json'
  }
});

api.getInitialCards()
  .then((res) => {
    cardList.renderItems(res);
  })
  .catch((err) => {
    console.log(err);
  });


//попап с формой добавления карточки
const popupTypePlace = new PopupWithForm(placePopupSelector, cardSubmitButtonHandler
  // (inputData)=>{
  // cardList.addItem(createNewCard(inputData));
);
popupTypePlace.setEventListeners();

  const cardList = new Section(
    {
      renderer: (item) => {
        cardList.addItem(createNewCard(item));
      },
    },
    cardsContainerSelector
  );

  // //класс добавления карточек на страницу
// const cardList = new Section ({
//   items: initialCards,
//   renderer: (item) => {
//     cardList.addItem(createNewCard(item));
//   }
// }, cardsContainerSelector);
// cardList.renderItems();

//создать карточку
function createNewCard(item) {
  const card = new Card(item, '#card-template', () => { imagePopup.open(item) });
  const cardElement = card.generateCard();
  return cardElement
};

function cardSubmitButtonHandler(inputData) {
  api.addNewCard(inputData.name, inputData.link)
  .then((res) => {
    cardList.renderItem(res);
  })
  .catch((err) => {
    console.log(err);
  });

}

//валидация
const profileFormValidator = new FormValidator(validationConfig, profileForm);
profileFormValidator.enableValidation();

const placeFormValidator = new FormValidator(validationConfig, placeForm);
placeFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

//класс попапа картинки карточки
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//класс с данными профиля
const userInfo = new UserInfo ({
  nameSelector: '.profile__name',
  jobSelector: '.profile__job',
  avatarSelector: '.profile__avatar'
});


api.getUserInfo()
.then((res) => {
  userInfo.setUserInfo(res);
})
.catch((err) => {
  console.log(err);
});

//попап с формой редактора профиля
const popupTypeProfile = new PopupWithForm(profilePopupSelector, profileSubmitButtonHandler);
popupTypeProfile.setEventListeners();

function profileSubmitButtonHandler(inputData) {
  api.editProfileInfo(inputData.name, inputData.job)
  .then((res) => {
    userInfo.setUserInfo(res)
  })
  .catch((err) => {
    console.log(err);
  });
}

//попап редактора аватара
const popupTypeAvatar = new PopupWithForm(avatarPopupSelector, avatarSubmitButtonHandler
  );
popupTypeAvatar.setEventListeners();

function avatarSubmitButtonHandler(inputData) {
  api.editAvatar(inputData.avatar)
  .then((res) => {
    userInfo.setUserInfo(res)
  })
  .catch((err) => {
    console.log(err);
  });
}



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

//слушатель кнопки редактора аватара
avatarButton.addEventListener('click', () => {
  placeFormValidator.disableCardSubmit();
  popupTypeAvatar.open();
});
