import '../pages/index.css'
import { Card } from '../script/components/Card.js';
import {
    saveButton, validationConfig, editButton, popupUserInfo, popupPlaces, popupConfirm, formUserInfo, formNewPlace, nameOnSite, jobOnSite, plusButton,
    element, popupPhoto, nameInput, jobInput, avatarDiv, popupAvatar, formAvatar
} from '../script/constants.js';
import { FormValidator } from '../script/components/FormValidator.js';
import { Section } from '../script/components/Section.js';
import { PopupConfirm } from '../script/components/PopupConfirm.js';
import { PopupWithImage } from '../script/components/PopupWithImage.js';
import { PopupWithForm } from '../script/components/PopupWithForm.js';
import { UserInfo } from '../script/components/UserInfo.js';
import { Api } from '../script/components/Api.js';

const api = new Api(' https://mesto.nomoreparties.co/v1/cohort-19', 'aa46272a-30e5-4402-b74a-772ca1a3dacb');
const popupWithImageCopy = new PopupWithImage(popupPhoto);
const popupWithFormCopy = new PopupWithForm(popupPlaces, handlePlaceFormSubmit);
const popupEditUser = new PopupWithForm(popupUserInfo, handleUserFormSubmit)
const popupAvatarChanging = new PopupWithForm(popupAvatar, handleAvatarFormSubmit);
const userInfo = new UserInfo(nameOnSite, jobOnSite, avatarDiv)
const PopupConfirmCopy = new PopupConfirm(popupConfirm)
const cardList = new Section({
    renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
    },
}, element)
//Создание экземпляров класса

let userId;
Promise.all([
    api.getInitialCards(),
    api.getUserInformation()
])
    .then((values) => {
        const profile = values[1];
        const cardsFromServer = values[0];
        userId = profile._id;
        cardList.renderItems(cardsFromServer)
        userInfo.setUserInfo(profile.name, profile.about, profile.avatar)
    })
    .catch((err) => {
        console.log(err)
    })
    //Создание промиса, который при загрузке страницы, отрисовывает карточки и инфомацию о пользователе

    
    function createCard(item) {
    const card = new Card(item,
        '.elements',
        userId,
        () => popupWithImageCopy.open(item.name, item.link),
        {
            handleLikeClick: (cardId, isLiked) => {
                if (!isLiked) {
                    api.putLike(cardId)
                    .then((res) => {
                         card.setLikes(res.likes)
                        })
                        .catch((err) => {
                            console.log(err)
                        })   
                    } else {
                        
                        api.deleteLike(cardId)
                    .then((res) => {
                        card.setLikes(res.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            },
            handleDeleteClick: () => {
                PopupConfirmCopy.open()
                PopupConfirmCopy.setSubmitAction(() => {
                    api.deleteCard(card.getId())
                    .then(() => {
                        card.removeCard();
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
            }
        }
        )
        const cardElement = card.generateCard();
    return cardElement;
}

function renderLoading(isLoading) {
    if (isLoading) {
        saveButton.textContent = 'Сохранение...';
    }
}
// Для задания кнопки текста Сохранение...

function openUserPopup() {
    const info = userInfo.getUserInfo();
    nameInput.setAttribute('value', info.title);
    jobInput.setAttribute('value', info.subTitle);
    popupEditUser.open()
}

function handlePlaceFormSubmit(data) {
    api.addCard(data)
        .then((res) => {
            renderLoading(true)
            const newCard = createCard(res);
            cardList.addItem(newCard);
            popupWithFormCopy.close();
        })
        .catch((err) => {
            console.log(err)

        })
       
    }

    function handleUserFormSubmit(data) {
        api.changeUserInformation(data)
        .then((res) => {
            renderLoading(true)
            // console.log(res.avatar)
            userInfo.setUserInfo(res.name, res.about, res.avatar)
            popupEditUser.close();
        })
        .catch((err) => {
            console.log(err)
        })
      
    }
    
function handleAvatarFormSubmit(data) {
    api.changeAvatar(data)
    .then((res) => {
        console.log(res)
        userInfo.setUserInfo(res.name, res.about, res.avatar)
        popupAvatarChanging.close()
    })
    .catch((err) =>{
        console.log(err)
    })
}
// Колбэки для PopupWithForm



PopupConfirmCopy.setEventListeners();
popupWithFormCopy.setEventListeners();
popupEditUser.setEventListeners();
popupAvatarChanging.setEventListeners();
popupWithImageCopy.setEventListeners();
//Установка слушателей на попапы

plusButton.addEventListener('click', () => { popupWithFormCopy.open(); addFormValidator.checkButton() });
editButton.addEventListener("click", () => openUserPopup());
avatarDiv.addEventListener('click', () => popupAvatarChanging.open());
//Установка слушателей на кнопки

const avatarFormValidator = new FormValidator(validationConfig, formAvatar);
avatarFormValidator.enableValidation();
const addFormValidator = new FormValidator(validationConfig, formNewPlace);
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(validationConfig, formUserInfo);
editFormValidator.enableValidation();
// Установка FormValidator для каждого экземпляра класса PopupWithForm