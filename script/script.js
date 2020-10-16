let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon-close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');

function popupOpen() {
popup.classList.add('popup_opened');
nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();    
    let profileTitle = document.querySelector('.profile__name');
    let profileSubtitle = document.querySelector('.profile__job');
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
formElement.addEventListener('submit', formSubmitHandler);



