export {initialCards, validationConfig, editButton, popupUserInfo, popupPlaces, popupConfirm, formUserInfo, formNewPlace, nameOnSite, jobOnSite, plusButton,
  element, popupPhoto, nameInput, jobInput, saveButton, avatarDiv, popupAvatar, formAvatar};

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

const validationConfig = {
    formSelector: '.popup__form',
    buttonSelector: '.popup__button-save',
    inputSelector: '.popup__input',
    buttonInvalid: 'popup__button-save_invalid',
    spanInvalid: 'popup__span-error',
    inputInvalid: 'popup__input-error',
    plusButton: 'profile__button-add',
};

const popupAvatar = document.querySelector('.popup-new-avatar')
const formAvatar = document.querySelector('.popup__form_new-avatar');
const avatarDiv = document.querySelector('.profile__avatar');
const saveButton = document.querySelector('.popup__button-save');
const editButton = document.querySelector('.profile__edit-button');
const popupUserInfo = document.querySelector('.popup-user-info');
const popupPlaces = document.querySelector('.popup-new-place');
const formUserInfo = document.querySelector('.popup__form_user-info');
const formNewPlace = document.querySelector('.popup__form_new-place');
const nameOnSite = document.querySelector('.profile__name');
const jobOnSite = document.querySelector('.profile__job');
const plusButton = document.querySelector('.profile__button-add');
const element = document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup_photo');
const popupConfirm = document.querySelector('.popup-confirm');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');