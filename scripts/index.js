


import Card from './Card.js';
import FormValidator from './FormValidator.js';
export {popupElementImg, popupImageTitle, popupImage}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз-Фото'
  },
  {
    name: 'Челябинская область-Фото',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область-Фото'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново-Фото'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка-Фото'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район-Фото'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал-Фото'
  }
];



const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item-type_error',
  errorClass: 'popup__error'
};

const editButton = document.querySelector('.profile__edit-button');
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const popups = document.querySelectorAll('.popup')
const popupProfile = document.querySelector('#popupProfile');
const profileNameText = document.querySelector('.profile__name');
const activity = document.querySelector('.profile__activity');
const popupName = document.querySelector('.popup__item_type_name');
const popupActivity = document.querySelector('.popup__item_type_activity');
const formElement = document.querySelector('.popup__form');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popupCard');
const popupCardName = document.querySelector('.popup__item_type_card-name');
const popupCardLink = document.querySelector('.popup__item_type_card-link');
const popupFormCard = document.querySelector('#popupFormCard');
const elementTamplate = document.querySelector('#element-template');
const elements = document.querySelector('.elements');
const elementImageTamplate = elementTamplate.content.querySelector('.element__image');
const elementTextTamplate = elementTamplate.content.querySelector('.element__text');
const popupImage = document.querySelector('#popupImage');
const popupElementImg = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const keyescape = 'Escape';



function closePopupEsc(evt) {
  if (evt.key === keyescape) {
    const popupOpened = document.querySelector('.popup_active');
    closePopup(popupOpened);
  }
}
function closePoupClick() {
  popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
      if (evt.target === popup) {
        closePopup(popup);
      }
    })
  })
}


function pushLike(evt) {
  evt.target.classList.toggle('element__like_active');
};

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
};

function openPopupProfile() {
  openPopup(popupProfile);
  popupName.value = profileNameText.textContent;
  popupActivity.value = activity.textContent;
}

function openPopupImage(evt) {
  const currentImage = evt.target;
  popupElementImg.src = currentImage.getAttribute('src');
  popupElementImg.alt = currentImage.getAttribute('alt');
  popupImageTitle.textContent = currentImage.closest('.element').textContent;
  openPopup(popupImage);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
};

const popupCloseButtonsListener = popupCloseButtons.forEach(button => {
  const popupClose = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClose));
});

function saveEditsProfile(evt) {
  evt.preventDefault();
  const popupOpened = document.querySelector('.popup_active');
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  closePopup(popupOpened)
};

function createCardNew(imageCardvalue, imageCardtext, imageCardalt) {
  elementTamplate.content;
  elementImageTamplate.src = imageCardvalue;
  elementTextTamplate.textContent = imageCardtext;
  elementImageTamplate.alt = imageCardalt;
  const cloneElement = elementTamplate.content.cloneNode(true);
  cloneElement.querySelector('.element__like').addEventListener('click', pushLike)
  cloneElement.querySelector('.element__delete').addEventListener('click', deleteClick)
  cloneElement.querySelector('.element__image').addEventListener('click', openPopupImage)
  return cloneElement
};

function addNewCard(evt) {
  evt.preventDefault();
  elements.prepend(createCardNew(popupCardLink.value, popupCardName.value, popupCardName.value));
  evt.target.reset()
  closePopup(popupCard)
};

function deleteClick(evt) {
  evt.target.closest('.element').remove();
};

closePoupClick();

formElement.addEventListener('submit', saveEditsProfile);

profileAddButton.addEventListener('click', () => openPopup(popupCard));

editButton.addEventListener('click', openPopupProfile);

popupFormCard.addEventListener('submit', addNewCard);

const renderElement = initialCards.forEach(item => {
  const card = new Card (item, '#element-template');
  const cardElement = card.generateCard();
  document.querySelector('.elements').append(cardElement);
});

function validationPoup(formElement) {
  const newFormval = new FormValidator(validationConfig, formElement)
  newFormval._setEventListeners(formElement, validationConfig);
}

validationPoup(popupProfile);
validationPoup(popupCard);








