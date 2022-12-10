export default class Modal {
  constructor({ modalSelector }) {
    this._modal = document.querySelector(modalSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openModal() {
    this._modal.classList.add("modal__opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  closeModal() {
    this._modal.classList.remove("modal__opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {
    this._modal.addEventListener("mousedown", (evt) => {
      if (
        !evt.target.closest(".modal__content") || evt.target.classList.contains("modal__close")
      ) {
        this.closeModal();
      }
    });
  }
}