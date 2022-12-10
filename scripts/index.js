let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__button-close');
let popup = document.querySelector('.popup');
let profileNameText = document.querySelector('.profile__name');
let activity = document.querySelector('.profile__activity');
let popupButton = document.querySelector('.popup__button');
let popupName = document.querySelector('.popup__item_type_name');
let popupActivity = document.querySelector('.popup__item_type_activity');
let formElement = document.querySelector('.popup__form');

function popupActive() {
  popup.classList.add('popup_active');
  popupName.value = profileNameText.textContent;
  popupActivity.value = activity.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  popup.classList.remove('popup_active')
}

function popupClose() {
  popup.classList.remove('popup_active')
}

editButton.addEventListener('click', popupActive);

formElement.addEventListener('submit', formSubmitHandler);

popupCloseButton.addEventListener('click', popupClose);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

initialCards.forEach(item => {
  let elements = document.querySelector ('.elements');
  let elementTamplate = document.querySelector ('#element-template').content;
  elementTamplate.querySelector ('.element__image').src = item.link;  
  elementTamplate.querySelector ('.element__text').textContent = item.name;
  let element = elementTamplate.querySelector ('.element').cloneNode(true);
  elements.append(element);
  element.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
  });
});

let profileAddButton = document.querySelector ('.profile__add-button');
let popupCard = document.querySelector ('#popupCard');
let popupCardButtonClose = document.querySelector ('#popupCardButtonClose');
let popupCardName = document.querySelector ('.popup__item_type_card-name');
let popupCardLink = document.querySelector ('.popup__item_type_card-link');
let popupButtonCard = document.querySelector ('#popupButtonCard');
let popupFormCard = document.querySelector ('#popupFormCard');
let deleteBotton = document.querySelectorAll('.element__delete');
let elements = document.querySelector ('.elements');
let element = document.querySelectorAll ('.element');
let elementText = document.querySelectorAll ('.element__text');
let elementLike = elements.querySelector ('.element__like');
let popupImage = document.querySelector ('#popupImage')
let elementImage = document.querySelectorAll ('.element__image');
let popupElementImg = document.querySelector ('.popup__image');
let popupImageButtonClose = document.querySelector ('#popupImageButtonClose');
let popupImageTitle = document.querySelector ('.popup__image-title');
console.log(elementText)











function popupCardActive() {
  popupCard.classList.add('popup_active');
}

profileAddButton.addEventListener('click', popupCardActive);

function popupCardClose () {
  popupCard.classList.remove('popup_active');
}

popupCardButtonClose.addEventListener('click', popupCardClose);  

function addNewCard (evt) {
  evt.preventDefault();
  let elements = document.querySelector ('.elements');
  let elementTamplate = document.querySelector ('#element-template').content;
  elementTamplate.querySelector ('.element__image').src = popupCardLink.value;
  elementTamplate.querySelector ('.element__text').textContent = popupCardName.value;
  let element = elementTamplate.querySelector ('.element').cloneNode(true);
  elements.prepend(element);
  element.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active')});
  element.querySelectorAll('.element__delete').forEach(item => {
    item.addEventListener('click', deleteClick)
  });

  element.querySelectorAll('.element__image').forEach(item => {
    item.addEventListener('click', imageClick)
  });
  popupCard.classList.remove('popup_active');
}

popupFormCard.addEventListener('submit', addNewCard);


function deleteClick (evt) {
  currentButton = evt.target;
  currentButton.closest('.element').remove();
}

deleteBotton.forEach(item => {
  item.addEventListener('click', deleteClick)
})

function imageClick (evt) {
  currentImage = evt.target;
  popupElementImg.src = currentImage.getAttribute('src');

  popupImageTitle.textContent = currentImage.closest('.element').textContent

  popupImage.classList.add('popup_active');
  
}

elementImage.forEach(item => {
  item.addEventListener('click', imageClick)
})



 function closepopupImage () {
  popupImage.classList.remove('popup_active');
 };

 popupImageButtonClose.addEventListener('click', closepopupImage)










/*function imageClick (evt) {
  currentImage = evt.target;
  popupElementImg.src = currentImage.getAttribute('src');
  popupImageTitle.textContent = elementText.forEach(item => {
    return item.textContent
  })
  popupImage.classList.add('popup_active');
  
}

elementImage.forEach(item => {
  item.addEventListener('click', imageClick)
})













/*let elements = document.querySelector ('.elements');

let elementTamplate = document.querySelector ('#element-template').content;

let element = elementTamplate.querySelector ('.element').cloneNode(true);

elementTamplate.querySelector ('.element__image');

elementTamplate.querySelector ('.element__text');

elements.append(element);*/










