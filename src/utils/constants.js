/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */
export const profileEditButton = document.querySelector(".profile__edit-button");
export const cardAddButton = document.querySelector("#add-button");
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

  profileNameInput: ".modal__input_type_name",
  profileDescriptionInput: ".modal__input_type_description",

  profileEditModal: "#modal-edit",
  cardAddModal: "#modal-add", 
  profileTitleElement: ".profile__title",
  profileDescriptionElement: ".profile__description"
};
/* -------------------------------------------------------------------------- */
/*                                 Cards Array                                */
/* -------------------------------------------------------------------------- */
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];