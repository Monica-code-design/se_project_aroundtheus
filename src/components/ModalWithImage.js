import Modal from "./Modal"

export default class ModalWithImage extends Modal {
  openModal({ name, link }) {
    this._modal.querySelector(".modal__preview-caption").textContent = name;
    this._modal.querySelector(".modal__preview-caption").alt = name;
    this._modal.querySelector(".modal__preview-image").src = link;
    super.openModal();
  }
}