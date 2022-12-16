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



const editButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelectorAll('.popup__button-close');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popupProfile');
const profileNameText = document.querySelector('.profile__name');
const activity = document.querySelector('.profile__activity');
const popupName = document.querySelector('.popup__item_type_name');
const popupActivity = document.querySelector('.popup__item_type_activity');
const formElement = document.querySelector('.popup__form');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#popupCard');
const popupCardButtonClose = document.querySelector('#popupCardButtonClose');
const popupCardName = document.querySelector('.popup__item_type_card-name');
const popupCardLink = document.querySelector('.popup__item_type_card-link');
const popupButtonCard = document.querySelector('#popupButtonCard');
const popupFormCard = document.querySelector('#popupFormCard');
const deleteBotton = document.querySelectorAll('.element__delete');
let elementTamplate = document.querySelector('#element-template');
const elements = document.querySelector('.elements');
let elementImageTamplate = elementTamplate.content.querySelector('.element__image');
let elementTextTamplate = elementTamplate.content.querySelector('.element__text');
let elementDeleteTamplate = elementTamplate.content.querySelector('.element__delete');
let elementLikeTamplate = elementTamplate.content.querySelector('.element__like');
let element = document.querySelectorAll('.element');
const elementText = document.querySelectorAll('.element__text');
const elementLike = elements.querySelector('.element__like');
const popupImage = document.querySelector('#popupImage');
const popupElementImg = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');


initialCards.forEach(item => {
  elements.append(createCardNew(item.link, item.alt,item.name ))
});

function Like (evt) {
  evt.target.classList.toggle('element__like_active');
};


function popupActive(evt) {

  if (evt.target.classList.contains('profile__edit-button')) {
    popupProfile.classList.add('popup_active');
    popupName.value = profileNameText.textContent;
    popupActivity.value = activity.textContent;
  }

  if (evt.target.classList.contains('profile__add-button')) {
    popupCard.classList.add('popup_active');
  }

  if (evt.target.classList.contains('element__image')) {
    currentImage = evt.target;
    popupElementImg.src = currentImage.getAttribute('src');
    popupImageTitle.textContent = currentImage.closest('.element').textContent;
    popupImage.classList.add('popup_active');
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
};

popupCloseButton.forEach(button => {
  const popupClose = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClose));
});

function saveEditsProfile(evt) {
  evt.preventDefault();
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  popup.classList.remove('popup_active')
}

function popupCardActive() {
  popupCard.classList.add('popup_active');
}

function createCard(Item) {

}


function createCardNew(imageCardvalue, imageCardalt, imageCardtext) {
  elementTamplate.content;
  elementImageTamplate.src = imageCardvalue;
  elementImageTamplate.alt = imageCardalt;
  elementTextTamplate.textContent = imageCardtext;
  const cloneElement = elementTamplate.content.cloneNode(true);
  cloneElement.querySelector('.element__like').addEventListener('click', Like)
  cloneElement.querySelector('.element__delete').addEventListener('click', deleteClick)
  cloneElement.querySelector('.element__image').addEventListener('click', popupActive)
  return cloneElement
};



function addNewCard(evt) {
  evt.preventDefault();
  elements.prepend(createCardNew(popupCardLink.value ,'Изображение добавленное пользователем' , popupCardName.value));

  popupCardName.value = '';

  popupCardLink.value = '';

  closePopup(popupCard)
}

function deleteClick(evt) {
  evt.target.closest('.element').remove();
}

formElement.addEventListener('submit', saveEditsProfile);

profileAddButton.addEventListener('click', popupActive);

editButton.addEventListener('click', popupActive);

popupFormCard.addEventListener('submit', addNewCard);










