import {openImagePopup} from './script.js';
export default class Card {
    constructor(data, cardSelector, openImagePopup) {
        this._text = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._openImagePopup = openImagePopup;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__item')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.elements__image').src = this._image;
        this._element.querySelector('.elements__text').textContent = this._text;
        return this._element;
    }
    _deleteItem() {
        this._element.remove();
    }
    _likeHandler() {
        const checkSrc = this._element.querySelector('.elements__like-picture').getAttribute('src');
        if (checkSrc === 'images/icon_like.svg') {
            this._element.querySelector('.elements__like-picture').setAttribute('src', 'images/black-like.svg');
        }
        else {
            this._element.querySelector('.elements__like-picture').setAttribute('src', 'images/icon_like.svg');
        }
    }
    
    _setEventListeners() {
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._deleteItem();
        });
        this._element.querySelector('.elements__like-picture').addEventListener('click', () => {
            this._likeHandler();
        });
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            openImagePopup(this._text, this._image);
        })
    }
    
}
// _createCard(data, cardSelector, openImagePopup) {
//     const card = new Card(data, cardSelector, openImagePopup);
//     const newCard = card.generateCard();
//     return newCard;
// }




