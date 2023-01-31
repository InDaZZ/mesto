export default class FormValidator {
  constructor(config, formtElement) {
    this._formtElement = formtElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showInputError(inputElement) {
    const errorElement = this._formtElement.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      errorElement.textContent = inputElement.validationMessage;
      inputElement.classList.add(this._inputErrorClass);
    }
  }
  _hideInputError(inputElement) {
    const errorElement = this._formtElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      errorElement.textContent = ' ';
      inputElement.classList.remove(this._inputErrorClass);
    }
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    }
    else {
      this._showInputError(inputElement);
    }
  }

  _hasInvaliInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid)
  }

  _disableSubmitButton () {
    
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }
  
  _toggleButoronState() {
    if (this._hasInvaliInput(this._inputList)) {
      this._disableSubmitButton ();
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formtElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formtElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButoronState();
      })

    })

  }

  enableValidation() {
    this._setEventListeners()
  }

}
