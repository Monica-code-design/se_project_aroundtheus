export default class Modal {
  constructor({ modalSelector }) {
    this._modal = document.querySelector(modalSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openModal() {
    this._modal.classList.add("modal_open");
    document.addEventListener("keyup", this._handleEscClose);
  }

  closeModal() {
    this._modal.classList.remove("modal_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(event) {
    event.preventDefault();
    if (event.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {
    this._modal.addEventListener("mousedown", (event) => {
      if (
        !event.target.closest(".modal__content") ||
        event.target.classList.contains("modal__close-button")
      ) {
        this.closeModal();
      }
    });
  }
}