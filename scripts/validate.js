const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__input_type_save',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

function showInputError(formElement, inputElement, config){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

function hideInputError(formElement, inputElement, config){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove(config.inputErrorClass);
};

function checkInputValidity(formElement, inputElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  };
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

function toggleButtonState(inputList, buttonElement, config) {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  }else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function(){
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    })
  });
};

function enableValidation(config){
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function(formElement) {
    setEventListeners(formElement, config);
  });
};

//деактиватор сабмита
function disableCardSubmit(config) {
  const cardSubmit = placePopup.querySelector(config.submitButtonSelector);
  cardSubmit.classList.add(config.inactiveButtonClass);
  cardSubmit.disabled = true;
};

enableValidation(validationConfig);
