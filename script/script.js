let editButton = document.querySelector('.profile__image');

function popupOpen() {
let Popup = document.querySelector('.popup');
Popup.classList.add('popup_opened');
let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
nameInput.value = document.querySelector('.profile__name').textContent;
jobInput.value = document.querySelector('.profile__job').textContent;
}

editButton.addEventListener("click", popupOpen);

let closeButton = document.querySelector('.form__icon-close');

function popupClose() {
    let Popup = document.querySelector('.popup');
    Popup.classList.remove('popup_opened');
}

closeButton.addEventListener("click", popupClose);

let formElement = document.querySelector('.form__button-save');

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

formElement.addEventListener('click', formSubmitHandler);



