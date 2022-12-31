import Modal from "./Modal"

export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this._modalCaption = this._modal.querySelector(".modal__preview-caption");
    this._modalImage = this._modal.querySelector(".modal__preview-image");
  }

  openModal({ name, link }) {
    this._modalCaption.textContent = name;
    this._modalImage.alt = name;
    this._modalImage.src = link;

    super.openModal();
  }
}