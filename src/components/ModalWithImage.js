import Modal from "./Modal"

export default class ModalWithImage extends Modal {
  openModal({ name, link }) {
    this._modal.querySelector(".modal__preview-caption").textContent = name;
    this._image = this._modal.querySelector(".modal__preview-image")
    this._image.alt = name;
    this._image.src = link;

    super.openModal();
  }
}