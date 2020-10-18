let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__icon-close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');
let profileTitle = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__job');


function popupOpen() {
popup.classList.add('popup_opened');
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
}

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
formElement.addEventListener('submit', formSubmitHandler);



