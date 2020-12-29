import '../pages/index.css'
import { Card } from './components/Card.js';
import { initialCards, validationConfig } from './data.js';
import { FormValidator } from './components/FormValidator.js';
import { Section } from './components/Section.js';
import { Popup } from './components/Popup.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js'

const editButton = document.querySelector('.profile__edit-button');
const popupUserInfo = document.querySelector('.popup-user-info');
const popupPlaces = document.querySelector('.popup-new-place');
const closeButtons = document.querySelectorAll('.popup__icon-close');
const formUserInfo = document.querySelector('.popup__form_user-info');
const formNewPlace = document.querySelector('.popup__form_new-place');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const nameOnSite = document.querySelector('.profile__name');
const jobOnSite = document.querySelector('.profile__job');
const plusButton = document.querySelector('.profile__button-add');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');
export const popupImage = document.querySelector('.popup__image');
export const popupText = document.querySelector('.popup__text');
export const popups = document.querySelectorAll('.popup');
export const element = document.querySelector('.elements');
export const popupPhoto = document.querySelector('.popup_photo');
const buttonFormPlace = document.querySelector('.popup__button-save_form');
const buttonPlace = formNewPlace.querySelector('.popup__button-save');

const popupWithImageCopy = new PopupWithImage(popupPhoto);
popupWithImageCopy.setEventListeners();

function createCard(item) {
    const card = new Card(item, '.elements', () => popupWithImageCopy.open(item.name, item.link));
    const cardElement = card.generateCard();
    return cardElement;
}


const cardList = new Section({
    massive: initialCards,
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    }
}, element);
cardList.renderItems();


function handlePlaceFormSubmit(data) {
    const newCard = createCard(data);
    cardList.addItem(newCard);
    popupWithFormCopy.close();
}

const popupEditUser = new PopupWithForm(popupUserInfo, handleUserFormSubmit)
const userInfo = new UserInfo(nameOnSite, jobOnSite)

function openUserPopup() {
    const info = userInfo.getUserInfo();
    popupUserInfo.querySelector('.popup__input_name').setAttribute('value', info.title);
    popupUserInfo.querySelector('.popup__input_job').setAttribute('value', info.subTitle);
    popupEditUser.open()
}

function handleUserFormSubmit(data) {
    console.log(data)
    userInfo.setUserInfo(data['input-user-name'], data['input-user-job'])
    popupEditUser.close();
}


const popupWithFormCopy = new PopupWithForm(popupPlaces, handlePlaceFormSubmit)
popupWithFormCopy.setEventListeners();
plusButton.addEventListener('click', () => { popupWithFormCopy.open(); addFormValidator.checkButton() });
buttonFormPlace.addEventListener('click', () => handlePlaceFormSubmit);

editButton.addEventListener("click", () => openUserPopup());
popupEditUser.setEventListeners();

const addFormValidator = new FormValidator(validationConfig, formNewPlace);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(validationConfig, formUserInfo);
editFormValidator.enableValidation();