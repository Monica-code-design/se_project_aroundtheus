import Modal from "./Modal";

export default class ModalWithConfirmation extends Modal {
  constructor(options) {
    super(options);
    this._submitButton = this._modal.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
    this._modalForm = this._modal.querySelector(".modal__form");
  }

  setSubmitText(submit, submitText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = submitText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  confirmDelete(confirmation) {
    this._handleFormSubmit = confirmation;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit();
    });
  }
}