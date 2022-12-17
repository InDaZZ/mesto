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
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
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
const elementTamplate = document.querySelector('#element-template');
const elements = document.querySelector('.elements');
const elementImageTamplate = elementTamplate.content.querySelector('.element__image');
const elementTextTamplate = elementTamplate.content.querySelector('.element__text');
const elementDeleteTamplate = elementTamplate.content.querySelector('.element__delete');
const elementLikeTamplate = elementTamplate.content.querySelector('.element__like');
const elementText = document.querySelector('.element__text');
const elementLike = elements.querySelector('.element__like');
const popupImage = document.querySelector('#popupImage');
const popupElementImg = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');


initialCards.forEach(item => {
  elements.append(createCardNew(item.link, item.name, item.alt))
});

function pushLike(evt) {
  evt.target.classList.toggle('element__like_active');
};

function openPopup(popup) {
  popup.classList.add('popup_active');
};


function activePopup(evt) {

  if (evt.target.classList.contains('profile__edit-button')) {
    openPopup(popupProfile)
    popupName.value = profileNameText.textContent;
    popupActivity.value = activity.textContent;
  }

  if (evt.target.classList.contains('profile__add-button')) {
    openPopup(popupCard)
  }

  if (evt.target.classList.contains('element__image')) {
    currentImage = evt.target;
    popupElementImg.src = currentImage.getAttribute('src');
    popupElementImg.alt = currentImage.getAttribute('alt')
    popupImageTitle.textContent = currentImage.closest('.element').textContent;
    openPopup(popupImage);
  }
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
};

popupCloseButtons.forEach(button => {
  const popupClose = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClose));
});

function saveEditsProfile(evt) {
  evt.preventDefault();
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  closePopup(popup)
};

function createCardNew(imageCardvalue, imageCardtext, imageCardalt) {
  elementTamplate.content;
  elementImageTamplate.src = imageCardvalue;
  elementTextTamplate.textContent = imageCardtext;
  elementImageTamplate.alt = imageCardalt;
  const cloneElement = elementTamplate.content.cloneNode(true);
  cloneElement.querySelector('.element__like').addEventListener('click', pushLike)
  cloneElement.querySelector('.element__delete').addEventListener('click', deleteClick)
  cloneElement.querySelector('.element__image').addEventListener('click', activePopup)
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

formElement.addEventListener('submit', saveEditsProfile);

profileAddButton.addEventListener('click', activePopup);

editButton.addEventListener('click', activePopup);

popupFormCard.addEventListener('submit', addNewCard);










