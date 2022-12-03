let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

function openPopup() {
  popup.style.display = 'flex';
}
editButton.addEventListener('click', openPopup);

let closeButton = document.querySelector('.popup__close-button');

function closePopup() {
  popup.style.display = 'none';
}
closeButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopup);
