import Popup from "./Popup.js";
console.log
export default class PopupWithForm extends Popup {

  constructor(popup, submitCallBack) {
    super();
    this._popup = popup;
    this.submitCallBack = submitCallBack;
    this.form = this._popup.querySelector('.popup__form');
    this.inputList = Array.from(this.form.querySelectorAll('.popup__item'));
    this.submitButton = this._popup.querySelector('.popup__button');
  }
  _getInputValues() {
    const inputValue = {};
    this.inputList.forEach(input => {
      inputValue[input.name] = input.value;
    })
    
    return inputValue;
  }

  close() {
    super.close();
    this.form.reset()
  }

  _submitClick(evt) {
    
    evt.preventDefault();
   
    this.submitCallBack(this._getInputValues());
    //setTimeout(this.dataLoaded, 1000, false);
   
    this.close();
    
    
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', this._submitClick.bind(this))
  }


  setButtonText (buttonTexts) {
    this.submitButton.textContent = buttonTexts;
  }

  dataLoaded (loaded) {
    if (loaded) {
      this.submitButton.textContent = 'Сохранение...'
    } else {
      this.submitButton.textContent = this.buttonText;
    }
  }
}