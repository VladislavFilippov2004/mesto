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

const editButton = document.querySelector('.profile__edit-button');
const popupUserInfo = document.querySelector('.popup-user-info');
const closeButtons = document.querySelectorAll('.popup__icon-close');
const formElement = document.querySelector('.popup__form_user-info');
const formNewPlace = document.querySelector('.popup__form_new-place');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__job');
const plusButton = document.querySelector('.profile__button-add');
const whiteLikes = document.querySelectorAll('.elements__like-picture');
const deleteButtons = document.querySelectorAll('.elements__trash');
const elementItems = document.querySelectorAll('.elements__item');
const photoItems = document.querySelectorAll('.elements__image');
const popupPlaces = document.querySelector('.popup-new-place');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
const popupPhoto = document.querySelector('.popup_photo');

for (let i = 0; i < initialCards.length; i++) {
addCard(initialCards[i].name, initialCards[i].link);
}

function addCard (name, link) {
    const itemTemplateContent = document.querySelector('#item-template').content;
    const itemClone = itemTemplateContent.cloneNode(true);
    itemClone.querySelector('.elements__image').src = link;
    itemClone.querySelector('.elements__text').textContent = name;
    itemClone.querySelector('.elements__like-picture').addEventListener('click', likeHandler);
    itemClone.querySelector('.elements__trash').addEventListener('click', deleteItem);
    itemClone.querySelector('.elements__image').addEventListener('click', showPopupPhoto);
    document.querySelector('.elements').append(itemClone);
}

function addListener (array, functionToAdd) {
    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener('click', functionToAdd);
    }
}
function openPopup(argument) {
    argument.classList.add('popup_opened');
}

function openPopupUser() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupUserInfo);
}

function closePopup(evt) {
    evt.target.closest('.popup').classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(evt);
    
}

function placeSubmitHandler(evt) {
    evt.preventDefault();
    const name = placeInput.value;
    const link = linkInput.value;
    addCard (name, link);
    closePopup(evt);

}

function deleteItem(evt) {
    evt.target.closest('.elements__item').remove(); 
}

function likeHandler(evt) {
    const checkSrc = evt.target.getAttribute('src');
    if (checkSrc === 'images/icon_like.svg') {
        evt.target.setAttribute('src', 'images/black-like.svg');
    }
    else {
        evt.target.setAttribute('src', 'images/icon_like.svg');
    }
}

 function showPopupPhoto(evt) {
    openPopup(popupPhoto);
    document.querySelector('.popup__image').src = evt.target.src;
    document.querySelector('.popup__text').textContent = evt.target.closest('.elements__item').querySelector('.elements__text').textContent;
 }

addListener (whiteLikes, likeHandler);
addListener (deleteButtons, deleteItem);
addListener (photoItems, showPopupPhoto);
addListener (closeButtons, closePopup);
editButton.addEventListener("click", openPopupUser);
formElement.addEventListener('submit', formSubmitHandler);
plusButton.addEventListener("click", () => openPopup(popupPlaces));
formNewPlace.addEventListener('submit', placeSubmitHandler);

