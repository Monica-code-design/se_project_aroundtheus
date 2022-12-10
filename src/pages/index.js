import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  profileEditButton,
  cardAddButton,
  validationSettings,
  selectors,
  initialCards,
} from "../utils/constants.js";
import "./index.css";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import ModalWithImage from "../components/ModalWithImage.js";
import Section from "../components/Section.js";
/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardSection.addItem(getCardView(cardData));
    },
  },
  selectors.cardListElement
);
cardSection.renderItems();

function getCardView(cardData) {
  const card = new Card(cardData, "#card-template", (data) => {
    imageModal.openModal(data);
  });
  return card.getView();
}
/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */
const editFormElement = document.querySelector("#edit-profile-form");
const editFormValidator = new FormValidator(validationSettings, editFormElement);
editFormValidator.enableValidation();

const addFormElement = document.querySelector("#add-card-form");
const addFormValidator = new FormValidator(validationSettings, addFormElement);
addFormValidator.enableValidation();
/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
const editProfileModal = new ModalWithForm({
  modalSelector: selectors.profileEditModal,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});
editProfileModal.setEventListeners();

const newCardModal = new ModalWithForm({
  modalSelector: selectors.cardAddModal,
  handleFormSubmit: (data) => {
    cardSection.addItem(getCardView(data));
  },
  resetOnClose: true,
});
newCardModal.setEventListeners();

const imageModal = new ModalWithImage({modalSelector: "#modal-image"});
imageModal.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: selectors.profileTitleElement,
  userTitleSelector: selectors.profileDescriptionElement,
});

profileEditButton.addEventListener("click", () => {
  const { userName, userTitle } = userInfo.getUserInfo();
  document.querySelector(selectors.profileNameInput).value = userName;
  document.querySelector(selectors.profileDescriptionInput).value = userTitle;
  addFormValidator.resetValidation();
  editProfileModal.openModal();
});

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  newCardModal.openModal();
});