import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {

  constructor (popup, submitCallBack) {
    super();
    this._popup = popup;
    this.form = this._popup.querySelector('.popup__form');
    this.submitCallBack = submitCallBack.bind(this);
    this.submitButton = this._popup.querySelector('.popup__button');
  }

  _submitClickk(evt) {
    evt.preventDefault();
    
    this.submitCallBack()
    
    this.close();
  }

  setButtonText (buttonTexts) {
    this.submitButton.textContent = buttonTexts;
  }

  setEventListeners() {
    super.setEventListeners();
    
    this.form.addEventListener('submit', this._submitClickk.bind(this))
  }
}