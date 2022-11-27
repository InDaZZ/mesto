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
  popup.classList.add('popup_active')
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









