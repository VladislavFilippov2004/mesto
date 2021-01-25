import { saveButton } from "./constants.js";
export {renderLoading}

function renderLoading(isLoading) {
    if (isLoading) {
        saveButton.textContent = 'Сохранение...';
    }
    else {
        saveButton.textContent = 'Сохранить'
    }
}
