import {popupElementImg, popupImageTitle, popupImage} from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt
  }

  _openPopupImage () {
    popupElementImg.src = this._link;
    popupElementImg.alt = this._alt;
    popupImageTitle.textContent = this._name;
    popupImage.classList.add('popup_active');
  }

  _getTemplateSelector () {
    const cardElements = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElements;
  }

  _pushLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCardBotton() {
    this._element.querySelector('.element__delete').closest('.element').remove();
  }
  
  _setEventListeners() {
    this._element = this._getTemplateSelector () ;
    this._element.querySelector('.element__like').addEventListener('click', () => {this._pushLike()});
    this._element.querySelector('.element__delete').addEventListener('click', () => {this._deleteCardBotton()});
    this._element.querySelector('.element__image').addEventListener('click', () => {this._openPopupImage()});
  }

  generateCard() {
    this._element = this._getTemplateSelector() ;
    this._setEventListeners()
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__text').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._alt; 
    return this._element
  };
}



  
