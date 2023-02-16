import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor(popupSelector, submitCallBack) {

    super();
    this._popupSelector = popupSelector
    this.submitCallBack = submitCallBack;
    this.form = this._popupSelector.querySelector('.popup__form');
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

  cloose() {
    super.cloose();
    this.form.reset()
  }

  open() {
    super.open();
  }

  _submitClick(evt) {
    evt.preventDefault();
    this.submitCallBack(this._getInputValues());
    this.cloose();
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', this._submitClick.bind(this))
  }

}