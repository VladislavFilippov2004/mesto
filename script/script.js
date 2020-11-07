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
const formUserInfo = document.querySelector('.popup__form_user-info');
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
const itemTemplateContent = document.querySelector('#item-template').content;
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');

initialCards.forEach(function (item) {
    addCard(item.name, item.link);
});

function addCard(name, link) {
    const itemClone = itemTemplateContent.cloneNode(true);
    itemClone.querySelector('.elements__image').src = link;
    itemClone.querySelector('.elements__text').textContent = name;
    itemClone.querySelector('.elements__like-picture').addEventListener('click', likeHandler);
    itemClone.querySelector('.elements__trash').addEventListener('click', deleteItem);
    itemClone.querySelector('.elements__image').addEventListener('click', showPopupPhoto);
    document.querySelector('.elements').append(itemClone);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function openPopupUser() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupUserInfo);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function passPopup(evt) {
    closePopup(evt.target.closest('.popup'));
}

function userFormSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(formUserInfo.closest('.popup'));
}

function placeFormSubmitHandler(evt) {
    evt.preventDefault();
    const name = placeInput.value;
    const link = linkInput.value;
    addCard(name, link);
    closePopup(formNewPlace.closest('.popup'));
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
    popupImage.src = evt.target.src;
    popupText.textContent = evt.target.closest('.elements__item').querySelector('.elements__text').textContent;
}

closeButtons.forEach(function (item) {
    item.addEventListener('click', passPopup);
});

editButton.addEventListener("click", openPopupUser);
formUserInfo.addEventListener('submit', userFormSubmitHandler);
plusButton.addEventListener("click", () => openPopup(popupPlaces));
formNewPlace.addEventListener('submit', placeFormSubmitHandler);

