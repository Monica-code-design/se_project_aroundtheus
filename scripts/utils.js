export function openModal(modal) {
    modal.classList.add("modal__opened");
    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
  
  export function closeModal(modal) {
    modal.classList.remove("modal__opened");
    document.removeEventListener("keyup", handleEscUp);
    modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}
  
  function handleEscUp(evt) {
    if (evt.key === "Escape") {
        const activeModal = document.querySelector(".modal__opened");
        closeModal(activeModal);
    }
}
  
  function closeModalOnRemoteClick(event) {
    if (event.target.classList.contains("modal")) {
      closeModal(event.target);
    }
  }