import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  profileEditButton,
  cardAddButton,
  avatarButton,
  profileNameInput,
  profileTitleInput,
  validationSettings,
  selectors,
} from "../utils/constants.js";
import "./index.css";
import ModalWithForm from "../components/ModalWithForm.js";
import UserInfo from "../components/UserInfo.js";
import ModalWithImage from "../components/ModalWithImage.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import ModalWithConfirmation from "../components/ModalWithConfirmation";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

const api = new Api("https://around.nomoreparties.co/v1/group-12", {
  authorization: "e3b84c1e-ff20-43fa-83a0-2b037664a87a",
  "Content-Type": "application/json",
});

let cardSection = null;
let userId = null;

const userInfo = new UserInfo({
  userNameSelector: selectors.profileNameElement,
  userTitleSelector: selectors.profileTitleElement,
  userAvatarSelector: selectors.avatarImage,
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data, cards]) => {
  userId = data._id;
  userInfo.setUserInfo({
    name: data.name,
    about: data.about,
    avatar: data.avatar,
  });

  cardSection = new Section(
    {
      items: cards,
      renderer: (cardData) => {
        cardSection.addItem(renderCard(cardData, userId));
      },
    },
    selectors.cardListElement
  );
  cardSection.renderItems();
})
.catch((error) => {
  console.log(`An error has occured ${error}`);
});

function renderCard(cardData, userId) {
  const card = new Card({
    data: { ...cardData, userId },
    selector: "#card-template",
    handleCardClick: () => {
      imageModal.openModal(cardData);
    },
    handleLikeClick: (data) => {
      if (card.isLiked()) {
        api
          .removeLikes(data._cardId)
          .then((response) => {
            card.showLikes(response.likes);
          })
          .catch((error) => {
            console.log(`An error has occured ${error}`);
          });
      } else {
        api
          .addLikes(data._cardId)
          .then((response) => {
            card.showLikes(response.likes);
          })
          .catch((error) => {
            console.log(`An error has occured ${error}`);
          });
      }
    },

    handleDeleteClick: (card) => {
      confirmationModal.confirmDelete(() => {
        confirmationModal.setSubmitText(true, "Deleting...");
        api
          .deleteCard(card._cardId)
          .then(() => {
            card.deleteCard();
            confirmationModal.closeModal();
          })
          .catch((error) => {
            console.log(`An error has occured ${error}`);
          })
          .finally(() => confirmationModal.setSubmitText(false));
      });
      confirmationModal.openModal();
    },
  });
  return card.getCardView();
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

const avatarFormElement = document.querySelector("#avatar-form");
const avatarFormValidator = new FormValidator(validationSettings, avatarFormElement);
avatarFormValidator.enableValidation();
/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
const editProfileModal = new ModalWithForm({
  modalSelector: selectors.profileEditModal,
  handleFormSubmit: (data) => {
    editProfileModal.setSubmitText(true);
    api
      .editUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        editProfileModal.closeModal();
      })
      .catch((error) => {
        console.log(`An error has occured ${error}`);
      })
      .finally(() => editProfileModal.setSubmitText(false));
  },
});
editProfileModal.setEventListeners();

const newCardModal = new ModalWithForm({
  modalSelector: selectors.cardAddModal,
  handleFormSubmit: (cardData) => {
    newCardModal.setSubmitText(true, "Creating...");
    api
      .postCard(cardData)
      .then((data) => {
        cardSection.addItem(renderCard(data, userId));
        newCardModal.closeModal();
      })
      .catch((error) => {
        console.log(`An error has occured ${error}`);
      })
      .finally(() => newCardModal.setSubmitText(false));
  },
  resetOnClose: true,
});
newCardModal.setEventListeners();

const newAvatarModal = new ModalWithForm({
  modalSelector: selectors.avatarModalElement,
  handleFormSubmit: (data) => {
    newAvatarModal.setSubmitText(true);
    api
      .editAvatar(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        newAvatarModal.closeModal();
      })
      .catch((error) => console.log(`An error has occured ${error}`))
      .finally(() => newAvatarModal.setSubmitText(false));
  },
  resetOnClose: true,
});
newAvatarModal.setEventListeners();

const imageModal = new ModalWithImage({modalSelector: "#modal-image"});
imageModal.setEventListeners();

const confirmationModal = new ModalWithConfirmation({modalSelector: selectors.confirmModal});
confirmationModal.setEventListeners();

avatarButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  newAvatarModal.openModal();
});

profileEditButton.addEventListener("click", () => {
  const { userName, userTitle } = userInfo.getUserInfo();
  profileNameInput.value = userName;
  profileTitleInput.value = userTitle;
  addFormValidator.resetValidation();
  editProfileModal.openModal();
});

cardAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  newCardModal.openModal();
});