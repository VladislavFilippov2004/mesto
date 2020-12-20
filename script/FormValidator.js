
export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    _showError(input) {
        const error = this._form.querySelector(`.${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalid);
        error.classList.add(this._config.spanInvalid);
    }

    _hideError(input) {
        const error = this._form.querySelector(`.${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalid);
    }
    _checkValidation(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }

    _setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this._config.buttonInvalid);
            button.disabled = false;
        } else {
            button.classList.add(this._config.buttonInvalid);
            button.disabled = true;
        }
    }
    checkButton() {
        this._submitButton = this._form.querySelector(this._config.buttonSelector);
        this._setButtonState(this._submitButton, this._form.checkValidity());
    }

    _setEventListener(form) {
        this._inputList = form.querySelectorAll(this._config.inputSelector);
        this._submitButton = this._form.querySelector(this._config.buttonSelector);
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkValidation(input);
                this._setButtonState(this._submitButton, this._form.checkValidity());
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(this._form);
    }
} 