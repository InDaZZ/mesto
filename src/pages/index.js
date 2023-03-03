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
  elements,
  popupImage,
  popupElementImg,
  popupImageTitle,
  PopupConfirmDelete,
  popupAvatarEditForm,
  popupEditAvatar,
  profileAvatar,
  popupSubmitButton
} from '../utils/constants.js'
import Api from '../components/Api.js';
import { api } from '../components/Api.js';
import './index.css'

// запрос на получение данных с сервера
const LoadingProfileFromServer = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60/users/me', headers: {
    authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c'
  }
});

// добавляю полученные данные профиля 
function profileFromServer() {

  LoadingProfileFromServer.getTask()
    .then((data) => {
      profileNameText.textContent = data.name;
      activity.textContent = data.about;
      profileAvatar.src = data.avatar;
    });

};

document.addEventListener('DOMContentLoaded', profileFromServer);

//открытие поапа профиля
const profilePopup = new PopupWithForm(popupProfile, submitCallBackToProfile);
profilePopup.setEventListeners();


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
  prodileEditing()

}

//отправляю новые данные профиля на сервер
function prodileEditing() {
  const testeditingProf = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-60/users/me', headers: {
      authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c', 'Content-Type': 'application/json'
    }
  });

  profilePopup.setButtonText('Сохранение...');

  testeditingProf.patchTaskProfileEditing({

    data: {
      name: `${profileNameText.textContent}`,
      about: `${activity.textContent}`,
    }

  })
    .finally(() => {
      profilePopup.setButtonText('Сохранить');
    });
};

//GET  запрос к серверу(получаю массив с обьектами карточек)
const cardRenderFromServ = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-60/cards', headers: {
    authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c'
  }
});

// функция создания нвой карточки
function createCard(item) {
  const card = new Card(item, '343b7f43dc618d5eebea0845', '#element-template', handleCardClick, () => {
    const poupWithCOnf = new PopupWithConfirm(PopupConfirmDelete, () => {

     
      poupWithCOnf.setButtonText('Сохранение...')

      api.deleteTask(item._id)
     
        .then(() => {
          card.deleteCard()
        })

        .finally(() => {
          poupWithCOnf.setButtonText('да');
        });
       
    })
    poupWithCOnf.open();
    poupWithCOnf.setEventListeners();
  }, (a) => {

    if (a) {
      api.deleteLike(item._id)
        .then((res) => {
          card.deleteLike()
          card.setLikes(res.likes)
        })

    } else {
      api.pushLike(item._id)
        .then((res) => {
          card.pushLike()
          card.setLikes(res.likes)
        })
    }
  }
  );
  const cardElement = card.generateCard();
  return cardElement
}

//колбек для открытия карточки
function handleCardClick(title, link, alt) {
  popupWithImageClass.open(title, link, alt);
};

//рендерю 6 карточек при загрузке страници
cardRenderFromServ.getTaskCards()
  .then((res) => {
    

    const addCardAuto = new Section({
      data: res, renderer: (item) => {

        addCardAuto.additem(createCard(item));

      }
    }, '.elements');

    addCardAuto.renderItems();
  });

// функция вставляющая карточку 

function addCardUser(newCard) {
  elements.prepend(newCard);
}
//добавляю новую карточку(отпраляю запрос на сервер с данными инпутов и вставляю новую карточку в разметку)
function addNewCard(item) {

  const newImageDropToServerr = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-60/cards ', headers: {
      authorization: '66beb885-0e1f-4be2-b0ab-ce6b91db573c', 'Content-Type': 'application/json'
    }
  });

  newImageDropToServerr.postTask({
    data: {
      name: item.name,
      link: item.link,
    }
  })
    .then((res) => {
      addCardUser(createCard(res))
    });
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
      profileAvatar.src = res.avatar
    })

    .finally(() => {
      popupAvatarEdit.setButtonText('Сохранить');
    });
})

profileAddButton.addEventListener('click', () => popupAddCard.open());


const ProfileValidation = new FormValidator(validationConfig, popupFormProfile);

ProfileValidation.enableValidation();

const cardValidation = new FormValidator(validationConfig, popupFormCard);

cardValidation.enableValidation();

const avatarProfileValidations = new FormValidator(validationConfig, popupAvatarEditForm);


popupAvatarEdit.setEventListeners();

profileAvatar.addEventListener('click', () => popupAvatarEdit.open())

avatarProfileValidations.enableValidation();












