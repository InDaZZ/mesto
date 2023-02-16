export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._popupsCloseByClick = this._popupsCloseByClick.bind(this);
  }

  open() {
    this._popupSelector.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners();
  }
  _handleEscClose(evt) {

    if (evt.keyCode === 27) {
      this.cloose();
    }

  }

  _popupsCloseByClick(evt) {
    if (evt.target === this._popupSelector) {
      this.cloose()
    }
  }

  _closePopup() {
    this._popupSelector.classList.remove('popup_active');
    this._handleEscCloseRemove()
  }

  cloose() {
    this._popupSelector.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);

  };
  setEventListeners() {
    this.butoonClose = this._popupSelector.querySelector('.popup__button-close');
    this.butoonClose.addEventListener('click', () => { this.cloose() });
    this._popupSelector.addEventListener('click', this._popupsCloseByClick);
  }
}