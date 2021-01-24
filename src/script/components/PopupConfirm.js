import {Popup} from './Popup.js'

export class PopupConfirm extends Popup {
    constructor(popup) {
    super(popup);
    }
    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
      }
      setEventListeners() {
          super.setEventListeners();
          this._popup.querySelector('.popup__button-save').addEventListener('click', () => {
            this._handleSubmitCallback()
          })
      }
}