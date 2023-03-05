export default class Card {
  constructor(data, { userID }, templateSelector, handleCardClick, func, handleLikeClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._handleCardClick = handleCardClick;
    this.func = func;
    this.userID = userID;
    this.ownerID = data.owner._id;
    this._likesArray = data.likes;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplateSelector() {
    const cardElements = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElements;
  }

  _checkLikeState() {
    return this._like.classList.contains('element__like_active');
  }

  pushLike() {
    this._like.classList.add('element__like_active');
    this._likesCounter.textContent = ++this._likesArray.length;
  }

  deleteLike() {
    this._like.classList.remove('element__like_active');
    this._likesCounter.textContent = --this._likesArray.length;
  }

  _isLiked() {
    if (this._likesArray.find(user => user._id === this.userID)) {
      this._like.classList.add('element__like_active');
    } else {
      this._like.classList.remove('element__like_active')
    }
  }

  setLikes(likesArray) {
    this._likesArray = likesArray
    this._likesCounter.textContent = likesArray.length;
  }

  _likeClick() {
    this._handleLikeClick(this._checkLikeState())
  }

  _deleteBotton() {

    this._elementDelete.closest('.element').remove();
  }

  deleteCard() {
    this._elementDelete.closest('.element').remove();
  }

  checkDeleteState() {

    if (this.ownerID !== this.userID) {
      this._elementDelete.remove()
    }

  }

  _setEventListeners() {

    this._like.addEventListener('click', () => { this._likeClick() });
    this._elementDelete.addEventListener('click', () => { this.func() });
    this._image.addEventListener('click', () => { this._handleCardClick(this._name, this._link, this._alt) });
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
    this._likesCounter = this._element.querySelector('.element__like-counter');
    this._likesCounter.textContent = this._likesArray.length;
    this.checkDeleteState();
    this._isLiked();
    this._setEventListeners();
    return this._element;
  };

}






