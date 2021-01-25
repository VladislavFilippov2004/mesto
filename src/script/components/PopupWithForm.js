import {Popup} from './Popup.js'
import {validationConfig} from '../../script/utils/constants.js'

export class PopupWithForm extends Popup {
    constructor(popup, submitFormHandler) {
        super(popup);
        this._form = popup.querySelector('.popup__form');
        this._submitFormHandler = submitFormHandler;
    }

    resetForm() {
        const spans = this._form.querySelectorAll(validationConfig.errorSpanSelector);
        spans.forEach((span) => {
            console.log(span);
            span.textContent = '';
        }) 
        const inputs = this._form.querySelectorAll(validationConfig.inputSelector);
        inputs.forEach((input) => {
            input.classList.remove(validationConfig.inputInvalid);
        })
    }

    close() {
        this.resetForm()
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