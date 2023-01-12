//попапы
const placePopup = document.querySelector('.popup_type_place');
const profilePopup = document.querySelector('.popup_type_profile');
const imagePopup = document.querySelector('.popup_type_image');

//попап картинки
const image = imagePopup.querySelector('.popup__image');
const imageTitle = imagePopup.querySelector('.popup__image-title');

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
const cardsContainer = document.querySelector('.cards');


//открытие и закрытие попапов
function openPopup(popup) {
  document.addEventListener('keydown', closeByEscape);
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  document.removeEventListener('keydown', closeByEscape);
  popup.classList.remove('popup_opened');
}

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
}

function newCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardImage.alt = name;

  const cardLike = cardElement.querySelector('.card__like-button');
  cardLike.addEventListener('click', function() {
    cardLike.classList.toggle('card__like-button_active');
  });

  const cardDelete = cardElement.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', function() {
    cardElement.remove();
  });

  cardImage.addEventListener('click', function() {
    image.src = link;
    imageTitle.textContent = name;
    image.alt = name;
    openPopup(imagePopup);
  });

  return cardElement
}

//6 карточек при загрузке
initialCards.forEach(function(item) {
  const link = item.link;
  const name = item.name;

  cardsContainer.append(newCard(link, name));
});

//добвить карточку
function addCard(imageInput, titleInput) {
  const link = imageInput.value;
  const name = titleInput.value;

  cardsContainer.prepend(newCard(link, name));

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
  disableCardSubmit(validationConfig);
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

profilePopup.addEventListener('click', function(){
  closePopup(profilePopup);
});
profilePopup.querySelector('.popup__container').addEventListener('click', function(event) {
  event.stopPropagation();
});

placePopup.addEventListener('click', function(){
  closePopup(placePopup);
});
placePopup.querySelector('.popup__container').addEventListener('click', function(event) {
  event.stopPropagation();
});

imagePopup.addEventListener('click', function(){
  closePopup(imagePopup);
});
imagePopup.querySelector('.popup__image-container').addEventListener('click', function(event) {
  event.stopPropagation();
});

profileForm.addEventListener('submit', submitProfile);
placeForm.addEventListener('submit', submitPlace);
