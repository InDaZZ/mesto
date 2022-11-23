let editButton = document.querySelector('.profile__edit-button');
let bottonClear = document.querySelector('.popup__botton-clear');
let popup = document.querySelector('.popup');
let name = document.querySelector('.profile__name');
let activity = document.querySelector('.profile__activity');
let popupBotton = document.querySelector('.popup__botton');
let popupName = document.querySelector('.popup__item_name');
let popupActivity = document.querySelector('.popup__item_activity');
let formElement = document.querySelector('.form');

function formSubmitHandler (evt) {
    evt.preventDefault();
    
}

formElement.addEventListener('submit', formSubmitHandler);

function saveChanges() {
    name.textContent = popupName.value;
    activity.textContent = popupActivity.value;
    popup.classList.remove('popup_active')
};

popupBotton.addEventListener ('click', saveChanges);

function popupActive() {
    popup.classList.add('popup_active')
    popupName.value = name.textContent;
    popupActivity.value = activity.textContent;
}

editButton.addEventListener ('click', popupActive);

function popupClose() {
    popup.classList.remove('popup_active')
}

bottonClear.addEventListener ('click', popupClose);



 

