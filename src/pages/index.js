import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';;
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  editButton,
  popupProfile,
  profileNameText,
  activity,
  profileAddButton,
  popupCard,
  popupInputName,
  popupInputActivity,
  popupFormCard,
  popupFormProfile,
  elements,
  popupImage,
  popupElementImg,
  popupImageTitle
} from '../utils/constants.js'
  import './index.css'

function createCard(item) {
  const card = new Card(item, '#element-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

function addCardUser(newCard) {
  elements.prepend(newCard);
}

//рендерю 6 карточек при загрузке страници
const addCardAuto = new Section({
  data: initialCards, renderer: (item) => {
    addCardAuto.additem(createCard(item));
  }
}, '.elements');

addCardAuto.renderItems();

//открытие поапа профиля
const profilePopup = new PopupWithForm(popupProfile, submitCallBackToProfile);

function openProfilePopup() {
  const inputInfo = userInfoClass.getUserInfo();
  popupInputName.value = inputInfo.fullName;
  popupInputActivity.value = inputInfo.activity;
  profilePopup.open();
}

editButton.addEventListener('click', openProfilePopup);

//получаю UserInfo для дальнейшего взаимодействия с информацией о пользователе
const userInfoClass = new UserInfo({
  profileName: profileNameText,
  activity: activity
});

//добавляю информацию введнную пользователем
function submitCallBackToProfile(userInfo) {
  userInfoClass.setUserInfo(userInfo);
}
function addNewCard(item) {
  addCardUser(createCard(item));
}
//открытие попапа добавления карточки
const popupAddCard = new PopupWithForm(popupCard, (item) => {
  addNewCard(item);
  cardValidation.disableSubmitButton();
});

//получаю PopupWithImage для октрытия попапа карточек 
const popupWithImageClass = new PopupWithImage(popupImage, popupImageTitle, popupElementImg);

profileAddButton.addEventListener('click', () => popupAddCard.open());

//вызываю функцию открытия поапа с картинкой
function handleCardClick(title, link, alt) {
  popupWithImageClass.open(title, link, alt);
};

const ProfileValidation = new FormValidator(validationConfig, popupFormProfile);

ProfileValidation.enableValidation();

const cardValidation = new FormValidator(validationConfig, popupFormCard);

cardValidation.enableValidation();
