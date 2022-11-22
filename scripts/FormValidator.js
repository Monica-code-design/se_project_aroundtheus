class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formEl;
    }

    _showInputError (inputEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        errorMessageEl.textContent = inputEl.validationMessage;
        errorMessageEl.classList.add(this._errorClass);
    }

    _hideInputError(inputEl) {
        const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        errorMessageEl.textContent = "";
        errorMessageEl.classList.remove(this._errorClass);
      }

    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputElements)) {
            return this.disableButton();
          }
          return this.enableButton();
    }
    
    _hasInvalidInput (inputList) {
        return !inputList.every((inputEl) => inputEl.validity.valid);
    }


    disableButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    enableButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
      }

    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
          return this._showInputError(inputEl);
        }
    
        this._hideInputError(inputEl);
    }
    

    _setEventListeners() {
        this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this.disableButton();
        this._inputElements.forEach((inputEl) => {
            inputEl.addEventListener('input', () => {
                this._checkInputValidity(inputEl);
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}

export default FormValidator;