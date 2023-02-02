
export default class Card {
  constructor(data, templateSelector, openPopup) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._openPopup = openPopup;
  }

  _getTemplateSelector() {
    const cardElements = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElements;
  }

  _pushLike() {
    this._like.classList.toggle('element__like_active');
  }

  _deleteBotton() {
    this._elementDelete.closest('.element').remove();
  }

  _setEventListeners() {

    this._like.addEventListener('click', () => { this._pushLike() });
    this._elementDelete.addEventListener('click', () => { this._deleteBotton() });
    this._image.addEventListener('click', () => { this._openPopup(this._name, this._link, this._alt) });
  }

  generateCard() {
    this._element = this._getTemplateSelector();
    this._image = this._element.querySelector('.element__image');
    this._text = this._element.querySelector('.element__text');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._like = this._element.querySelector('.element__like');
    this._image.src = this._link;
    this._image.alt = this._alt;
    this._text.textContent = this._name;
    this._setEventListeners()
    return this._element
  };
}




