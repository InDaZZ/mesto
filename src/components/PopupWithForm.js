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

  close() {
    super.close().bind(this);
    this._form.reset()
  }

  open() {
    super.open()
    this.form.addEventListener('submit', this._submitClick.bind(this))
  }

  _submitClick(evt) {
    evt.preventDefault();
    this.submitCallBack(this._getInputValues());

    this._popupSelector.classList.remove('popup_active');
  }

  setEventListeners() {
    super.setEventListeners().bind(this);

  }

}