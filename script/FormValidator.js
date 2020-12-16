

export default class FormValidator {
    constructor(config, form) { 
    this._config = config;
    this._form = form;
    }

    

    _showError(form, input) {
        const error = form.querySelector(`.${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalid);
        error.classList.add(this._config.spanInvalid);
    }
    
    _hideError(form, input) {
        const error = form.querySelector(`.${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalid);
        error.classList.remove(this._config.spanInvalid);
    }
    
    _checkValidation(form, input) {
        if (!input.validity.valid) {
            this._showError(form, input);
        } else {
            this._hideError(form, input);
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
    
    _setEventListener (form) {
        const inputList = form.querySelectorAll(this._config.inputSelector);
        const submitButton = form.querySelector(this._config.buttonSelector);
        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkValidation(form, input);
                this._setButtonState(submitButton, form.checkValidity());
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