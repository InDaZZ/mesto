import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';;
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import {
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
  popupImage,
  popupElementImg,
  popupImageTitle,
  PopupConfirmDelete,
  popupAvatarEditForm,
  popupEditAvatar,
  profileAvatar,
  
} from '../utils/constants.js'
import Api from '../components/Api.js';
import './index.css';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'a5cc8f48-b1d5-4939-89bd-28066ec899ee',
    'Content-Type': 'application/json'
  }
});
//колбек для Section
function renderFromSection (newCard) {
  cardsList.additem(createCard(newCard));
}

//класс Section вставляющий краточки
const cardsList = new Section({
   renderer: renderFromSection
}, '.elements');

//переменная для Id пользователя
let userId

Promise.all([api.getUserInfo(), api.getTaskCards()])

.then((res) => {
  
  userId = res[0]._id //id пользователя
  cardsList.renderItems(res[1]) //загрузка и отрисовка катрочек с сервера

}
)
.catch((error) => console.log(`Ошибка :( ${error})`));

// добавляю полученные данные профиля 
function profileFromServer() {

  api.getUserInfo()

    .then((data) => {

      userInfoClass.setUserInfo(data)
      userInfoClass.setAvatarInfo(data.avatar)

    })

    .catch((error) => console.log(`Ошибка :( ${error})`));
};

document.addEventListener('DOMContentLoaded', profileFromServer);

//открытие поапа профиля
const profilePopup = new PopupWithForm(popupProfile, submitCallBackToProfile);
profilePopup.setEventListeners();


function openProfilePopup() {
  const inputInfo = userInfoClass.getUserInfo();
  popupInputName.value = inputInfo.name;
  popupInputActivity.value = inputInfo.about;
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
  profileEditing()
}

//отправляю новые данные профиля на сервер
function profileEditing() {

  profilePopup.setButtonText('Сохранение...');

  api.patchTaskProfileEditing({

    data: {
      name: `${profileNameText.textContent}`,
      about: `${activity.textContent}`,

    }

  })
    .then(profilePopup.close())  

    .catch((error) => console.log(`Ошибка :( ${error})`))

    .finally(() => {
      profilePopup.setButtonText('Сохранить');
    });

};  

//попап подтвержждения
const popupWitConfirmation = new PopupWithConfirm(PopupConfirmDelete,);
popupWitConfirmation.setEventListeners();

// функция создания нвой карточки
function createCard(item) {
  const card = new Card(item, { userID: userId }, '#element-template', handleCardClick, () => {

    popupWitConfirmation.submitCallback(() => {

      popupWitConfirmation.setButtonText('Сохранение...')

      api.deleteTask(item._id)

        .then(() => {

          card.deleteCard()
          popupWitConfirmation.close()
          
        })

        .catch((error) => console.log(`Ошибка :( ${error})`))

        .finally(() => { 

          popupWitConfirmation.setButtonText('да'); 

        }); 
    })

    popupWitConfirmation.open();
    
    
  }, (likeAlreadyActive) => {

    if (likeAlreadyActive) {
      api.deleteLike(item._id)
        .then((res) => {
          card.deleteLike()
          card.setLikes(res.likes)
        })
        .catch((error) => console.log(`Ошибка :( ${error})`))
    } else {
      api.pushLike(item._id)
        .then((res) => {
          card.pushLike()
          card.setLikes(res.likes)
        })
        .catch((error) => console.log(`Ошибка :( ${error})`))
    }
  },
  );
  const cardElement = card.generateCard();
  return cardElement
}

//колбек для открытия карточки
function handleCardClick(title, link, alt) {
  popupWithImageClass.open(title, link, alt);
};

// функция вставляющая карточку 


//добавляю новую карточку(отпраляю запрос на сервер с данными инпутов и вставляю новую карточку в разметку)
function addNewCard(item) {

  api.postTask({
    data: {
      name: item.name,
      link: item.link,
    }
  })
    .then((res) => {
      cardsList.additem(createCard(res))
      popupAddCard.close()
    })
    .catch((error) => console.log(`Ошибка :( ${error})`));

}

//открытие попапа добавления карточки
const popupAddCard = new PopupWithForm(popupCard, (item) => {
  addNewCard(item);
  cardValidation.disableSubmitButton();
});

popupAddCard.setEventListeners();

//получаю PopupWithImage для октрытия попапа карточек 
const popupWithImageClass = new PopupWithImage(popupImage, popupImageTitle, popupElementImg);

popupWithImageClass.setEventListeners();

//поап изменения аватара
const popupAvatarEdit = new PopupWithForm(popupEditAvatar, (avatarData) => {
  popupAvatarEdit.setButtonText('Сохранение...')

  api.pathTaskFromAvatar(avatarData.link)

    .then((res) => {
      userInfoClass.setAvatarInfo(res.avatar)
    })

    .catch((error) => console.log(`Ошибка :( ${error})`))
    .finally(() => {
      popupAvatarEdit.setButtonText('Сохранить');
    });
})

profileAddButton.addEventListener('click', () => popupAddCard.open());

const profileValidation = new FormValidator(validationConfig, popupFormProfile);

profileValidation.enableValidation();

const cardValidation = new FormValidator(validationConfig, popupFormCard);

cardValidation.enableValidation();

const avatarProfileValidations = new FormValidator(validationConfig, popupAvatarEditForm);

popupAvatarEdit.setEventListeners();

profileAvatar.addEventListener('click', () => popupAvatarEdit.open())

avatarProfileValidations.enableValidation();












