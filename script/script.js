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
const popupPhoto = document.querySelector('.popup_photo');
const itemTemplateContent = document.querySelector('#item-template').content;
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const popups = document.querySelectorAll('.popup');
const element =  document.querySelector('.elements');

initialCards.forEach(function (item) {
    createCard(item.name, item.link);
});

function addCard(item) { 
   element.prepend(item);
}

function createCard (name, link) {
    const itemClone = itemTemplateContent.cloneNode(true);
    const cardImage = itemClone.querySelector('.elements__image');
    const cardText = itemClone.querySelector('.elements__text');
    cardText.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    itemClone.querySelector('.elements__like-picture').addEventListener('click', likeHandler);
    itemClone.querySelector('.elements__trash').addEventListener('click', deleteItem);
    cardImage.addEventListener('click', () => showPopupPhoto(name, link));
    addCard(itemClone);
}


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup);
        enableValidation(validationConfig);
    } 
}

function openPopupUser() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupUserInfo);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
     if (popup.classList.contains('popup-new-place')){
        placeInput.value = '';
        linkInput.value = '';
        enableValidation(validationConfig);
     }
    
}

function passPopup(evt) {
    closePopup(evt.target.closest('.popup'));
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
    createCard(name, link);
    closePopup(popupPlaces);
    // placeInput.value = '';
    // linkInput.value = '';

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

function showPopupPhoto(name, link) {
    openPopup(popupPhoto);
    popupImage.src = link;
    popupText.textContent = name;
}

closeButtons.forEach(function (item) {
    item.addEventListener('click', passPopup);
});


editButton.addEventListener("click", openPopupUser);
formUserInfo.addEventListener('submit', userFormSubmitHandler);
plusButton.addEventListener("click", () => openPopup(popupPlaces));
formNewPlace.addEventListener('submit', placeFormSubmitHandler);
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
    })
});
