


import Card from './Card.js';
import FormValidator from './FormValidator.js';
export { popupElementImg, popupImageTitle, popupImage }

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
const popups = document.querySelectorAll('.popup');
const popupCardButoonSave = document.querySelector('#popupButtonCard');
const popupProfile = document.querySelector('#popupProfile');
const profileNameText = document.querySelector('.profile__name');
const activity = document.querySelector('.profile__activity');
const popupName = document.querySelector('.popup__item_type_name');
const popupActivity = document.querySelector('.popup__item_type_activity');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popupCard');
const popupCardName = document.querySelector('.popup__item_type_card-name');
const popupCardLink = document.querySelector('.popup__item_type_card-link');
const popupFormCard = document.querySelector('#popupFormCard');
const popupFormProfile = document.querySelector('#popupFormProfile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const elementTamplate = document.querySelector('#element-template');
const elements = document.querySelector('.elements');
const elementImageTamplate = elementTamplate.content.querySelector('.element__image');
const elementTextTamplate = elementTamplate.content.querySelector('.element__text');
const popupImage = document.querySelector('#popupImage');
const popupElementImg = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const keyEscape = 'Escape';

function closePopupEsc(evt) {
  if (evt.key === keyEscape) {
    const popupOpened = document.querySelector('.popup_active');
    closePopup(popupOpened);
  }
};

function initPopupsCloseByClick() {
  popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
      if (evt.target === popup) {
        closePopup(popup);
      }
    })
  })
};

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closePopupEsc);
};

function openPopupProfile() {
  openPopup(popupProfile);
  popupName.value = profileNameText.textContent;
  popupActivity.value = activity.textContent;
};

function handleOpenPopup(title, link, alt) {
  popupImageTitle.textContent = title;
  popupElementImg.src = link;
  popupElementImg.alt = alt;
  openPopup(popupImage);
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closePopupEsc);
};

const popupCloseButtonsListener = popupCloseButtons.forEach(button => {
  const popupClose = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClose));
});

function saveEditProfile(evt) {
  evt.preventDefault();
  const popupOpened = document.querySelector('.popup_active');
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  closePopup(popupProfile);
};

function formdetect(evt) {
  evt.preventDefault();
  const inputData = {
    name: popupCardName.value,
    link: popupCardLink.value,
    alt: popupCardName.value,
  }
  addCardUser(createCardNew(inputData))
  evt.target.reset()
  cardValidation.disableSubmitButton();
  closePopup(popupCard);
};

function createCardNew(data) {
  const card = new Card(data, '#element-template', handleOpenPopup);
  return card.generateCard();
};

initPopupsCloseByClick();

function addCardAuto(card) {
  elements.append(card)
};

function addCardUser(card) {
  elements.prepend(card)
};

initialCards.forEach((data) => {
  addCardAuto(createCardNew(data));
});


const ProfileValidation = new FormValidator(validationConfig, popupFormProfile);

ProfileValidation.enableValidation();

const cardValidation = new FormValidator(validationConfig, popupFormCard);

cardValidation.enableValidation();

popupProfileForm.addEventListener('submit', saveEditProfile);

profileAddButton.addEventListener('click', () => openPopup(popupCard));

editButton.addEventListener('click', openPopupProfile);

popupFormCard.addEventListener('submit', formdetect);





