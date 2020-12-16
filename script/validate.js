// function showError(form, input, config) {
//     const error = form.querySelector(`.${input.id}-error`);
//     error.textContent = input.validationMessage;
//     input.classList.add(config.inputInvalid);
//     error.classList.add(config.spanInvalid);
// }

// function hideError(form, input, config) {
//     const error = form.querySelector(`.${input.id}-error`);
//     error.textContent = '';
//     input.classList.remove(config.inputInvalid);
//     error.classList.remove(config.spanInvalid);
// }

// function checkValidation(form, input, config) {
//     if (!input.validity.valid) {
//         showError(form, input, config);
//     } else {
//         hideError(form, input,config);
//     }
// }

// function setButtonState(button, isActive, config) {
//     if (isActive) {
//         button.classList.remove(config.buttonInvalid);
//         button.disabled = false;
//     } else {
//         button.classList.add(config.buttonInvalid);
//         button.disabled = true;
//     }
// }

// function setEventListener (form, config) {
//     const inputList = form.querySelectorAll(config.inputSelector);
//     const submitButton = form.querySelector(config.buttonSelector);
//     inputList.forEach((input) => {
//         input.addEventListener('input', () => {
//             checkValidation(form, input, config);
//             setButtonState(submitButton, form.checkValidity(), config);
//         });
//     });
// }

// function enableValidation(config) {
//     const forms = document.querySelectorAll(config.formSelector);
//     forms.forEach((form) =>{
//     setEventListener(form, config);
//     const submitButton = form.querySelector(config.buttonSelector);
//     setButtonState(submitButton, form.checkValidity(), config);
//     });
// }



// enableValidation(validationConfig);

