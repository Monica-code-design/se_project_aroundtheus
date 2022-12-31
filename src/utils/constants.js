/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
export const profileEditButton = document.querySelector(".profile__edit-button");
export const cardAddButton = document.querySelector(".profile__add-button");
export const avatarButton = document.querySelector(".profile__avatar-button");

export const profileNameInput = document.querySelector(".modal__input_type_name");
export const profileTitleInput = document.querySelector(".modal__input_type_description");

export const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

export const selectors = {
  cardListElement: ".cards__list",
  cardTemplate: "#card-template",
  previewModal: "#modal-image",

  profileEditModal: "#modal-edit",
  cardAddModal: "#modal-add", 
  profileNameElement: ".profile__title",
  profileTitleElement: ".profile__description",

  avatarModalElement: "#avatar-modal",
  avatarButton: "#avatar-button",
  avatarImage: ".profile__image",

  confirmModal: "#confirm-modal"
};