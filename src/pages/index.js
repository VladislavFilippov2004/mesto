import '../pages/index.css'
import { Card } from '../script/components/Card.js';
import {initialCards, validationConfig, editButton, popupUserInfo, popupPlaces, formUserInfo, formNewPlace, nameOnSite, jobOnSite, plusButton,
element, popupPhoto, nameInput, jobInput} from '../script/constants.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { Section } from '../script/components/Section.js';
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { UserInfo } from '../script/components/UserInfo.js'



const popupWithImageCopy = new PopupWithImage(popupPhoto);
popupWithImageCopy.setEventListeners();

function createCard(item) {
    const card = new Card(item, '.elements', () => popupWithImageCopy.open(item.name, item.link));
    const cardElement = card.generateCard();
    return cardElement;
}


const cardList = new Section({
    array: initialCards,
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
    nameInput.setAttribute('value', info.title);
    jobInput.setAttribute('value', info.subTitle);
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

editButton.addEventListener("click", () => openUserPopup());
popupEditUser.setEventListeners();

const addFormValidator = new FormValidator(validationConfig, formNewPlace);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(validationConfig, formUserInfo);
editFormValidator.enableValidation();