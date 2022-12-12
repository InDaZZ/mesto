let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__button-close');



const popupCloseButtonNode = document.querySelectorAll('.popup__button-close');

let popup = document.querySelector('.popup');
let popupProfile = document.querySelector('#popupProfile');
let profileNameText = document.querySelector('.profile__name');
let activity = document.querySelector('.profile__activity');
let popupButton = document.querySelector('.popup__button');
let popupName = document.querySelector('.popup__item_type_name');
let popupActivity = document.querySelector('.popup__item_type_activity');
let formElement = document.querySelector('.popup__form');

console.log(popupCloseButtonNode)


function popupActive(evt) {
  console.log(evt.target)
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
}

popupCloseButtonNode.forEach (button => {
  const popupClose = button.closest('.popup');
  button.addEventListener ('click', () => closePopup(popupClose));
});




/*popupCloseButtonNode.forEach(item => {
  item.addEventListener('click', )
})*/


/*function popupActive(evt) {
  popup.classList.add('popup_active');
  popupName.value = profileNameText.textContent;
  popupActivity.value = activity.textContent;
}*/

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileNameText.textContent = popupName.value;
  activity.textContent = popupActivity.value;
  popup.classList.remove('popup_active')
}

/*function popupClose() {
  popup.classList.remove('popup_active')
}*/

editButton.addEventListener('click', popupActive);

formElement.addEventListener('submit', formSubmitHandler);

/*popupCloseButton.addEventListener('click', popupClose);*/

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



initialCards.forEach(item => {
  let elements = document.querySelector('.elements');
  let elementTamplate = document.querySelector('#element-template').content;
  elementTamplate.querySelector('.element__image').src = item.link;
  elementTamplate.querySelector('.element__text').textContent = item.name;
  let element = elementTamplate.querySelector('.element').cloneNode(true);
  elements.append(element);
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
});

let profileAddButton = document.querySelector('.profile__add-button');
let popupCard = document.querySelector('#popupCard');
let popupCardButtonClose = document.querySelector('#popupCardButtonClose');
let popupCardName = document.querySelector('.popup__item_type_card-name');
let popupCardLink = document.querySelector('.popup__item_type_card-link');
let popupButtonCard = document.querySelector('#popupButtonCard');
let popupFormCard = document.querySelector('#popupFormCard');
let deleteBotton = document.querySelectorAll('.element__delete');
let elementTamplate = document.querySelector('#element-template')
let elements = document.querySelector('.elements');
let element = document.querySelectorAll('.element');
let elementText = document.querySelectorAll('.element__text');
let elementLike = elements.querySelector('.element__like');
let popupImage = document.querySelector('#popupImage');
let elementImage = document.querySelector('.element__image');
let elementImageAll = document.getElementsByClassName('element__image');
let popupElementImg = document.querySelector('.popup__image');
let popupImageButtonClose = document.querySelector('#popupImageButtonClose');
let popupImageTitle = document.querySelector('.popup__image-title');

console.log(elementTamplate)

arrImageAll = Array.from(elementImageAll,);

console.log(arrImageAll)

arrImageAll.forEach(item => {
  item.addEventListener('click', popupActive);
})

function popupCardActive() {
  popupCard.classList.add('popup_active');
}

profileAddButton.addEventListener('click', popupActive);

function popupCardClose() {
  popupCard.classList.remove('popup_active');
}

popupCardButtonClose.addEventListener('click', popupCardClose);

/*function createCard(evt) {
  evt.preventDefault();
  
  let elementTamplate = document.querySelector('#element-template').content;
  elementTamplate.querySelector('.element__image').src = popupCardLink.value;
  elementTamplate.querySelector('.element__text').textContent = popupCardName.value;
  let element = elementTamplate.querySelector('.element').cloneNode(true);
  elements.prepend(element);
  element.querySelector('.element__like').addEventListener('click', function (button) {
    buttonEvt = 
    evt.target.classList.toggle('element__like_active')
  });
  element.querySelectorAll('.element__delete').forEach(item => {
    item.addEventListener('click', deleteClick)
  });

  element.querySelectorAll('.element__image').forEach(item => {
    item.addEventListener('click', imageClick)
  });
  popupCard.classList.remove('popup_active');
}*/

function createCardNew() {
  let elementTamplate = document.querySelector('#element-template').content;
  elementTamplate.querySelector('.element__image').src = popupCardLink.value;
  elementTamplate.querySelector('.element__text').textContent = popupCardName.value;
  const element = elementTamplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__delete').addEventListener('click', deleteClick)
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  
  });
  return element
  };



  function addNewCard (evt) {
    evt.preventDefault();
    elements.prepend(createCardNew());

    popupCardName.value = '';

    popupCardLink.value = '';

    closePopup(popupCard)
  }
  

popupFormCard.addEventListener('submit', addNewCard);


function deleteClick(evt) {
  currentButton = evt.target;
  currentButton.closest('.element').remove();
}

deleteBotton.forEach(item => {
  item.addEventListener('click', deleteClick)
})

/*function imageClick(evt) {
  currentImage = evt.target;
  popupElementImg.src = currentImage.getAttribute('src');
  popupImageTitle.textContent = currentImage.closest('.element').textContent;
  popupImage.classList.add('popup_active');

}*/

/*elementImageAll.forEach(item => {
  item.addEventListener('click', popupActive);
  
})*/

/*function closepopupImage() {
  popupImage.classList.remove('popup_active');
};*/

/*popupImageButtonClose.addEventListener('click', closepopupImage)*/









