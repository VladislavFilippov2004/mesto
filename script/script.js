let editButton = document.querySelector('.profile__edit-button');
let Popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__form_icon-close');
let formElement = document.querySelector('.popup__form');

function popupOpen() {
Popup.classList.add('popup_opened');
let nameInput = document.querySelector('.popup__form_input-name');
let jobInput = document.querySelector('.popup__form_input-job');
nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;
}

function popupClose() {
    Popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    let nameInput = document.querySelector('#nameInput');
    let jobInput = document.querySelector('#jobInput');
    
    let profileTitle = document.querySelector('.profile__name');
    let profileSubtitle = document.querySelector('.profile__job');
    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
}

editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
formElement.addEventListener('submit', formSubmitHandler);



