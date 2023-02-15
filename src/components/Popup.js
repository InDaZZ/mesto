export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popupSelector.addEventListener('click', this._popupsCloseByClick.bind(this));
    this.cloose();
    console.log(this.butoonClose)
  }
  _handleEscClose(evt) {

    if (evt.keyCode === 27) {
      this._popupSelector.classList.remove('popup_active');
    }
  }

  _popupsCloseByClick(evt) {
    if (evt.target === this._popupSelector) {
      this._popupSelector.classList.remove('popup_active');
    }
  }

  cloose() {
    this.butoonClose = this._popupSelector.querySelector('.popup__button-close');
    this.butoonClose.addEventListener('click', () => { this._popupSelector.classList.remove('popup_active'); });
  };
}