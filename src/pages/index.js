import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';;
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'

export { popupElementImg, popupImageTitle, popupImage, popupCardName, popupCardLink }

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
const popupProfile = document.querySelector('#popupProfile');
const profileNameText = document.querySelector('.profile__name');
const activity = document.querySelector('.profile__activity');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popupCard');
const popupCardName = document.querySelector('.popup__item_type_card-name');
const popupCardLink = document.querySelector('.popup__item_type_card-link');
const popupFormCard = document.querySelector('#popupFormCard');
const popupFormProfile = document.querySelector('#popupFormProfile');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('#popupImage');
const popupElementImg = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');


function createCardNew(data) {
  const card = new Card(data, '#element-template');
  return card.generateCard();
}

function addCardUser(newCard) {
  elements.prepend(newCard);
}

//рендерю 6 карточек при загрузке страници
const addCardAuto = new Section({
  data: initialCards, renderer: (item) => {

    const card = new Card(item, '#element-template', handleCardClick);

    const cardElement = card.generateCard();

    addCardAuto.additem(cardElement);
  }
}, '.elements');

addCardAuto.renderItems();

//открытие поапа профиля
const profilePopup = new PopupWithForm(popupProfile, submitCallBackToProfile);

editButton.addEventListener('click', () => profilePopup.open());

//получаю UserInfo для дальнейшего взаимодействия с информацией о пользователе
const userInfoClass = new UserInfo({
  profileName: profileNameText,
  activity: activity
})

//добавляю информацию введнную пользователем
function submitCallBackToProfile(userInfo) {
  userInfoClass.setUserInfo(userInfo);
}

//открытие попапа добавления карточки
const popupAddCard = new PopupWithForm(popupCard, () => {
  const InfoCard = {
    name: popupCardName.value,
    link: popupCardLink.value
  };
  addCardUser(createCardNew(InfoCard));
});

//получаю PopupWithImage для октрытия попапа карточек 
const popupWithImageClass = new PopupWithImage(popupImage);

profileAddButton.addEventListener('click', () => popupAddCard.open());

//вызываю функцию открытия поапа с картинкой
function handleCardClick(title, link, alt) {
  popupWithImageClass.open(title, link, alt);
}

const ProfileValidation = new FormValidator(validationConfig, popupFormProfile);

ProfileValidation.enableValidation();

const cardValidation = new FormValidator(validationConfig, popupFormCard);

cardValidation.enableValidation();