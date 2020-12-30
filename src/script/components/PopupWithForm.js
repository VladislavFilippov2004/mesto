import {Popup} from './Popup.js'

export class PopupWithForm extends Popup {
    constructor(popup, submitFormHandler) {
        super(popup);
        this._form = popup.querySelector('.popup__form');
        this._submitFormHandler = submitFormHandler;
    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._inputValues = {};
        this._inputList.forEach( input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(this._getInputValues());
        })
    }
}