import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";

/* -------------------------------------------------------------------------- */
/*                                 Cards Array                                */
/* -------------------------------------------------------------------------- */

const initialCards = [
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


/* -------------------------------------------------------------------------- */
/*                                  Variables                                 */
/* -------------------------------------------------------------------------- */

const imageModal = document.querySelector("#modal-image");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#modal-edit"); 
const profileModalClose = profileModal.querySelector(".modal__close");

const profileEditForm = document.querySelector("#edit-profile-form");
const profileNameElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");


const cardForm = document.querySelector("#add-card-form");
const cardModal = document.querySelector("#modal-add"); 
const cardAddButton = document.querySelector(".profile__add-button");
const cardModalClose = cardModal.querySelector(".modal__close");

const profileNameInput = profileEditForm.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");

const cardsWrap = document.querySelector(".cards__list");
const cardSelector = "#card-template";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

const previewCloseButton = imageModal.querySelector(".modal__close");
previewCloseButton.addEventListener("click", () => {
  closeModal(imageModal);
});


function renderCard(cardElement, container) {
    container.prepend(cardElement);
}

function getCardView(cardData) {
    const card = new Card(cardData, cardSelector);
    return card.getView();
}

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

const validationSettings = {
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
}

const editFormElement = document.querySelector("#edit-profile-form");
const editFormValidator = new FormValidator(
    validationSettings, 
    editFormElement
);
editFormValidator.enableValidation();

const addFormElement = document.querySelector("#add-card-form");
const addFormValidator = new FormValidator(
    validationSettings,
    addFormElement
    );
addFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener('click', () => { 
    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;

    openModal(profileModal);
});

profileModalClose.addEventListener('click', () => {
    closeModal(profileModal);
});

cardAddButton.addEventListener('click', () => {
    openModal(cardModal);
});

cardModalClose.addEventListener('click', () => {
    closeModal(cardModal);
});
    
profileEditForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const nameInput = evt.target.name.value;
    const descriptionInput = evt.target.description.value;

    profileNameElement.textContent = nameInput;
    profileDescriptionElement.textContent = descriptionInput;

    closeModal(profileModal);
});

cardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const name = evt.target.title.value;
    const link = evt.target.link.value;
    const cardView = getCardView({
        name,
        link
    });
    renderCard(cardView, cardsWrap);
    closeModal(cardModal);
    cardForm.reset();
    addFormValidator.disableButton();
});

/* -------------------------------------------------------------------------- */
/*                               Initialize Card                              */
/* -------------------------------------------------------------------------- */

initialCards.reverse().forEach((cardData) => {
    const cardView = getCardView(cardData);
    renderCard(cardView, cardsWrap); 
});