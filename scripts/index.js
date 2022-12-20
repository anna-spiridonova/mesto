const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//попапы
const popup = document.querySelector('.popup');
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const imagePopup = document.querySelector('.popup_type_image');

//кнопки
const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');
const profileCloseButton = profilePopup.querySelector('.popup__close-button');
const placeCloseButton = placePopup.querySelector('.popup__close-button');
const imageCloseButton = imagePopup.querySelector('.popup__close-button');

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

const cardTemplate = document.querySelector('#card-template').content;

//открытие и закрытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//сохранить профиль
function submitProfile (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(profilePopup);
}

//6 карточек при загрузке
initialCards.forEach(function(item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;

  const cardLike = cardElement.querySelector('.card__like-button');
  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('card__like-button_active');
  });

  const cardDelete = cardElement.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', function() {
    cardElement.remove();
  });

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.addEventListener('click', function() {
    imagePopup.querySelector('.popup__image').src = item.link;
    imagePopup.querySelector('.popup__image-title').textContent = item.name;
    openPopup(imagePopup);
  });

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.append(cardElement);
});


//добвить карточку
function addCard(imageInput, titleInput) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').src = imageInput.value;
  cardElement.querySelector('.card__title').textContent = titleInput.value;

  const cardLike = cardElement.querySelector('.card__like-button');
  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('card__like-button_active');
  });

  const cardDelete = cardElement.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', function() {
    cardElement.remove();
  });

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.addEventListener('click', function() {
    imagePopup.querySelector('.popup__image').src = cardElement.querySelector('.card__image').src;
    imagePopup.querySelector('.popup__image-title').textContent = cardElement.querySelector('.card__title').textContent;
    openPopup(imagePopup);
  });

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.prepend(cardElement);

  imageInput.value = '';
  titleInput.value = '';
}

//создать карточку
function submitPlace (evt) {
  evt.preventDefault();
  addCard(imageInput, titleInput);
  closePopup(placePopup);
}

//слушатели кнопок
addButton.addEventListener('click', function() {
  openPopup(placePopup);
});

editButton.addEventListener('click', function() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(profilePopup);
});

profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup);
});

placeCloseButton.addEventListener('click', function () {
  closePopup(placePopup);
});

imageCloseButton.addEventListener('click', function () {
  closePopup(imagePopup);
});

profileForm.addEventListener('submit', submitProfile);
placeForm.addEventListener('submit', submitPlace);
