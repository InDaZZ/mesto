import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {

  constructor (popup,) {
    super();
    this._popup = popup;
    this.form = this._popup.querySelector('.popup__form');
    
    this.submitButton = this._popup.querySelector('.popup__button');
  }

  _submitClick(evt) {
    evt.preventDefault();
    this._handleSubmitCallback();
    
  }

  submitCallback(callback) {
    this._handleSubmitCallback = callback;
  }

  setButtonText (buttonTexts) {
    this.submitButton.textContent = buttonTexts;
  }

  setEventListeners() {
    super.setEventListeners();
    
    this.form.addEventListener('submit', this._submitClick.bind(this))
  }
}