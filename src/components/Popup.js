export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._popupsCloseByClick = this._popupsCloseByClick.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
  }

  _popupsCloseByClick(evt) {
    if (evt.target === this._popup) {
      this.close()
    }
  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose);

  };
  setEventListeners() {
    this.butoonClose = this._popup.querySelector('.popup__button-close');
    this.butoonClose.addEventListener('click', () => { this.close() });
    this._popup.addEventListener('click', this._popupsCloseByClick);
  }
}