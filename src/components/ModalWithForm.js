import Modal from "./Modal";

export default class ModalWithForm extends Modal {
  constructor({ modalSelector, handleFormSubmit, resetOnClose }) {
    super({ modalSelector });
    this._resetOnClose = resetOnClose;
    this._modalForm = this._modal.querySelector(".modal__form");
    this._inputList = this._modalForm.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => (formValues[input.name] = input.value));
    return formValues;
  }

  openModal() {
    if (this._resetOnClose) {
      this._modalForm.reset();
    }
    super.openModal();
  }
  
  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.closeModal();
      this._modalForm.reset();
    });
    super.setEventListeners();
  }
}