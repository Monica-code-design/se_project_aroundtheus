const showInputError = (formEl, inputEl, {inputErrorClass, errorClass}) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
};

const hideInputError = (formEl, inputEl, {inputErrorClass, errorClass}) => {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
};

const checkInputValidity = (formEl, inputEl, config) => {
    if (!inputEl.validity.valid) {
        return showInputError(formEl, inputEl, config);
    } else {
        hideInputError(formEl, inputEl, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputEl) => {
        return !inputEl.validity.valid;
    });
};

const disableButton = (submitButton, config) => {
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = true;
};

const enableButton = (submitButton, config) => {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = false;
};

const toggleButtonState = (inputList, submitButton, config) => {
    if (hasInvalidInput(inputList)) {
        disableButton(submitButton, config);
    } else {
        enableButton(submitButton, config);
    }
};

const setEventListeners = (formEl, config) => {
    const { submitButtonSelector } = config;
    const { inputSelector } = config;
    const inputList = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(submitButtonSelector);
    toggleButtonState(inputList, submitButton, config);

    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', (e) => {
            checkInputValidity(formEl, inputEl, config);
            toggleButtonState(inputList, submitButton, config);
        });
    });
};

const enableValidation = (config) => {
    const formList = [...document.querySelectorAll(config.formSelector)];
    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        setEventListeners(formEl, config);
    });
};

enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
});