import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._photo = popup.querySelector('.popup__image');
        this._text = popup.querySelector('.popup__text');
    };

    open(name, link) {
        this._text.textContent = name;
        this._photo.src = link;
        super.open();
    };

    close() {
        super.close();
    };

    setEventListeners() {
        super.setEventListeners();
    };
};