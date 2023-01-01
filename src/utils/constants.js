/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
export const profileEditButton = document.querySelector(".profile__edit-button");
export const cardAddButton = document.querySelector("#add-button");
export const avatarButton = document.querySelector("#avatar-button");

export const profileNameInput = document.querySelector(".modal__input_type_name");
export const profileTitleInput = document.querySelector(".modal__input_type_title");

export const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const selectors = {
  cardListElement: ".cards__array",
  cardTemplate: "#card-template",
  previewModal: "#preview-modal",

  profileEditModal: "#edit-modal",
  cardAddModal: "#add-modal",
  profileNameElement: ".profile__name",
  profileTitleElement: ".profile__title",

  avatarModalElement: "#avatar-modal",
  avatarButton: "#avatar-button",
  avatarImage: ".profile__image",

  confirmModal: "#confirm-modal",
};