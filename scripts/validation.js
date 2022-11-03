const showInputError = (formEl, inputEl, errorMessage, {inputErrorClass, errorClass}) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = errorMessage;
    errorMessageEl.classList.add(errorClass);
};

const hideInputError = (formEl, inputEl, {inputErrorClass, errorClass}) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
};

const checkInputValidity = (formEl, inputEl, options) => {
    if (!inputEl.validity.valid) {
        return showInputError(formEl, inputEl, inputEl.validationMessage, options);
    } else {
        hideInputError(formEl, inputEl, options);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputEl) => {
        return !inputEl.validity.valid;
    });
};

const disableButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
};

const enableButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
};

const toggleButtonState = (inputList, submitButton, inactiveButtonClass) => {
    if(hasInvalidInput(inputList)) {
        disableButton(submitButton, inactiveButtonClass);
    } else {
        enableButton(submitButton, inactiveButtonClass);
    }
};

const setEventListeners = (formEl, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => {
    const inputList = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(submitButtonSelector);

    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', (e) => {
            checkInputValidity(formEl, inputEl, rest);
            toggleButtonState(inputList, submitButton, inactiveButtonClass);
        });
    });
};

const enableValidation = ({formSelector, ...rest}) => {
    const formList = [...document.querySelectorAll(formSelector)];
    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        setEventListeners(formEl, rest);
    });
};

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
};

enableValidation(config);