
export class Card {
    constructor(data, cardSelector, userId, { handleCardClick, handleLikeClick, handleDeleteClick}) {
        this._text = data.name;
        this._image = data.link;
        this._id = data._id;
        this._ownerid = data.owner._id
        this._ownerav = data.owner.avatar
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._userId = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = () => handleDeleteClick(this._id)
        this._handleLikeClick = () => handleLikeClick(this._id, this._isLiked())
        this._handleCardClickHandler = this._handleCardClickHandler.bind(this);

    }

    _isLiked() {
        if (this._element.querySelector('.elements__like').classList.contains('elements__like_black')) {
            return true
        }
        return false
    }
    
    
    _cardLikedByThisUser() {
        for (let i = 0; i < this._likes.length; i++) {
            if (this._likes[i]._id === this._userId) {
                return true
            }
        }
        return false
    }
    
    setLikes(likesArray) {
        this._likes = likesArray;
        this._element.querySelector('.elements__like-counter').textContent = likesArray.length;
        if (this._cardLikedByThisUser()) {
            this._likeElement.classList.add('elements__like_black');
        } else {
            this._likeElement.classList.remove('elements__like_black')
        }
        
    }
    getId() {
        return this._id;
    }
    
    removeCard() {
        // console.log(this._element)
        this._element.remove()
        }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__item')
            .cloneNode(true);
            return cardElement;
        }

        _handleCardClickHandler(name, link) {
            this._handleCardClick(name, link);
        }

    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.elements__image');
        this._likeElement = this._element.querySelector('.elements__like');
        this._deleteElement = this._element.querySelector('.elements__trash');
        this._element.querySelector('.elements__text').textContent = this._text;
        this._cardImage.src = this._image;
        this._cardImage.alt = this._text;
        this.setLikes(this._likes)
        this._element.querySelector('.elements__like-counter').textContent = this._likes.length;
        this._setEventListeners();
        if(this._userId !== this._ownerid) {
            this._deleteElement.style.display = 'none';
        }

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._handleDeleteClick();
        });
        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._handleLikeClick(this._id, this._isLiked());
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClickHandler(this._text, this._image);
        });

    }

};