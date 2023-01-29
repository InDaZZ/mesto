export default class FormValidator {
  constructor(data, formtElemen) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }
  
  _showInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._inputErrorClass);
    }
  }
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      errorElement.textContent = ' ';
      inputElement.classList.remove(this._inputErrorClass);
    }
  }

  _checkInputValidity (formElement, inputElement, data) {
    if (inputElement.validity.valid) {
      this._hideInputError(formElement, inputElement, data);
    }
    else {
      this._showInputError(formElement, inputElement, data);
    }
  }

  _hasInvaliInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid)
  }

  _toggleButoronState(inputList, buttonElement) {
    if (this._hasInvaliInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
    else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners(formElement, data) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, data);
        this._toggleButoronState(inputList, buttonElement, data);
      })

    })

  }

  enableValidation(data) {
    formElement.setEventListeners(formElement, data)
  }

}
