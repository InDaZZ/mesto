import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popup, submitCallBack) {
    super();
    this._popup = popup;
    this.submitCallBack = submitCallBack;
    this.form = this._popup.querySelector('.popup__form');
    this.inputList = Array.from(this.form.querySelectorAll('.popup__item'));

  }
  _getInputValues() {
    const inputValue = {};
    this.inputList.forEach(input => {
      inputValue[input.name] = input.value;
    })
    console.log(inputValue)
    return inputValue;
  }

  close() {
    super.close();
    this.form.reset()
  }

  _submitClick(evt) {
    evt.preventDefault();
    this.submitCallBack(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', this._submitClick.bind(this))
  }
}