import Card from './card.js';
import {initialCards} from './initial.js';
import FormValidator from './FormValidator.js';

const validationConfig =  {
    formSelector: '.popup__form',
    buttonSelector:'.popup__button-save',
    inputSelector:'.popup__input',
    buttonInvalid:'popup__button-save_invalid',
    spanInvalid:'popup__span-error',
    inputInvalid: 'popup__input-error'
}
 
const editButton = document.querySelector('.profile__edit-button');
const popupUserInfo = document.querySelector('.popup-user-info');
const formList = document.querySelectorAll('.popup__form');
const closeButtons = document.querySelectorAll('.popup__icon-close');
const formUserInfo = document.querySelector('.popup__form_user-info');
const formNewPlace = document.querySelector('.popup__form_new-place');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileTitle = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__job');
const plusButton = document.querySelector('.profile__button-add');
const popupPlaces = document.querySelector('.popup-new-place');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
const itemTemplateContent = document.querySelector('#item-template').content;
export const popupPhoto = document.querySelector('.popup_photo');
export const popupImage = document.querySelector('.popup__image');
export const popupText = document.querySelector('.popup__text');
export const popups = document.querySelectorAll('.popup');
export const element = document.querySelector('.elements');

initialCards.forEach((item) =>{
    const card = new Card(item, '.elements', openImagePopup());
    const cardElement = card.generateCard();
    element.prepend(cardElement);
});

const addCard = () => {
    const nameCard = placeInput.value;
    const linkCard = linkInput.value;
    const card = new Card ({name: nameCard, link: linkCard}, '.elements', openImagePopup());
    const cardElement = card.generateCard();
    element.prepend(cardElement);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup);
    }
}

export function openImagePopup(name, link) {
    popupText.textContent = name;
    popupImage.src = link;
    openPopup(popupPhoto);
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

export function passPopup(evt) {
    closePopup(evt.target.closest('.popup'));
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
    
}

function openPopupUser() {
    clearInputs(popupUserInfo);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupUserInfo);
}

function clearInputs(popup) {
    const popupInputs = popup.querySelectorAll('.popup__input');
    popupInputs.forEach(function (input) {
        input.value = '';
    })
}

function checkButton(popup) {
    const popupInputs = Array.from(popup.querySelectorAll('.popup__input'));
    const popupButton = popup.querySelector('.popup__button-save');
    const validityResult = popupInputs.some((input) => {
        return !input.validity.valid;
    });
    
    if (validityResult) {
        addFormValidator._setButtonState(popupButton, false);
    }
 }

function userFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupUserInfo);
}

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    const name = placeInput.value;
    const link = linkInput.value;
    addCard(name, link, '.elements', openImagePopup());
    closePopup(popupPlaces);
}

closeButtons.forEach(function (item) {
    item.addEventListener('click', passPopup);
});


editButton.addEventListener("click", openPopupUser);
formUserInfo.addEventListener('submit', userFormSubmitHandler);
plusButton.addEventListener("click", () => {
    clearInputs(popupPlaces);
    checkButton(popupPlaces);
    openPopup(popupPlaces);
});

formNewPlace.addEventListener('submit', placeFormSubmitHandler);
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
    })
}); 

const addFormValidator = new FormValidator(validationConfig, formNewPlace);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, formUserInfo);
editFormValidator.enableValidation();