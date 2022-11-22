let addBotton = document.querySelector('.profile__add-button-container');
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
    popupBotton.addEventListener ('click', function() {
        name.textContent = popupName.value;
        activity.textContent = popupActivity.value;
    })
}

formElement.addEventListener('submit', formSubmitHandler);


addBotton.addEventListener ('click', function() {
    popup.classList.add('popup_active')
    popupName.value = name.textContent;
    popupActivity.value = activity.textContent;
});

bottonClear.addEventListener ('click', function() {
    popup.classList.remove('popup_active')
});



 

