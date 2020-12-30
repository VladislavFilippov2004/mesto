export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._text = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardClickHandler = this._handleCardClickHandler.bind(this);
        // this._cardImage = this.document.querySelector('.elements__image');
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
        this._cardImage = this._element.querySelector('.elements__image');
        this._element.querySelector('.elements__text').textContent = this._text;
        this._cardImage.src = this._image;
        this._cardImage.alt = this._text;
        this._setEventListeners();
        return this._element;
    }

    _deleteItem() {
        this._element.remove();
    }
    
    _likeHandler() {
        const btn = this._element.querySelector('.elements__like');
        btn.classList.toggle('elements__like_black');
    }

    _handleCardClickHandler(name, link) {
        this._handleCardClick(name, link);
    }

    _setEventListeners() {
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._deleteItem();
        });
        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._likeHandler();
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClickHandler(this._text, this._image);
        });

    }

};