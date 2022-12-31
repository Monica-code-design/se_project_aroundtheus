import Modal from "./Modal";

export default class ModalWithForm extends Modal {
  constructor({ modalSelector, handleFormSubmit, resetOnClose }) {
    super({ modalSelector });
    this._resetOnClose = resetOnClose;
    this._modalForm = this._modal.querySelector(".modal__form");
    this._inputList = this._modalForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._modal.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => (formValues[input.name] = input.value));
    return formValues;
  }

  closeModal() {
    if (this._resetOnClose) {
      this._modalForm.reset();
    }
    super.closeModal();
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }

  setSubmitText(submit, submitText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = submitText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}