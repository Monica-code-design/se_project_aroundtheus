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

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsWrap = document.querySelector(".cards__list");
const profileModal = document.querySelector("#modal-edit"); 
const profileEditForm = document.querySelector("#edit-profile-form")
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalClose = profileModal.querySelector(".modal__close");
const profileNameElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");
const profileNameInput = profileEditForm.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");

const cardModal = document.querySelector("#modal-add"); 
const cardAddButton = document.querySelector(".profile__add-button");
const cardModalClose = cardModal.querySelector(".modal__close");
const cardForm = document.querySelector(".modal__form_add");
const inputList = [...cardForm.querySelectorAll(".modal__input")];
const addSubmitButton = cardModal.querySelector(".modal__button");

const imageModal = document.querySelector("#modal-image");
const previewImageElement = document.querySelector(".modal__preview-image");
const previewModalClose = imageModal.querySelector(".modal__close");
const previewModalCaption = imageModal.querySelector(".modal__preview-caption");

const handleEscUp = (evt) => {
    const activeModal = document.querySelector(".modal__opened");
    if (evt.key === "Escape") {
        closeModal(activeModal);
    }
};

function closeModalOnRemoteClick(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("modal__close")) {
        closeModal(evt.target);
    }
};

function openModal(modal) {
    modal.classList.add("modal__opened");
    document.addEventListener("keyup", handleEscUp);
    modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModal(modal) {
    modal.classList.remove("modal__opened");
    document.removeEventListener("keyup", handleEscUp);
    modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function renderCard(cardElement, container) {
    container.prepend(cardElement);
}

function getCardElement(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    const cardLikeBtn = cardElement.querySelector(".card__like-button");
    cardLikeBtn.addEventListener('click', function () {
        cardLikeBtn.classList.toggle('card__like-button_active');
    });

    const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
    cardDeleteBtn.addEventListener('click', function () {
        cardElement.remove();
    });

    cardImage.addEventListener('click', function() {
        previewImageElement.src = cardData.link;
        previewImageElement.alt = `Image ${cardData.name}`;
        previewModalCaption.textContent = cardData.name;
        openModal(imageModal);
    });
    
    return cardElement;
};

profileEditButton.addEventListener('click', () => { 

    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;

    openModal(profileModal);
});

profileModalClose.addEventListener('click', () => {
    closeModal(profileModal);
});

cardAddButton.addEventListener('click', () => {
    toggleButtonState(inputList, addSubmitButton, {inactiveButtonClass: "modal__button_disabled"});
    openModal(cardModal);
});

cardModalClose.addEventListener('click', () => {
    closeModal(cardModal);
});

previewModalClose.addEventListener('click', () => {
    closeModal(imageModal);
    
});
    
profileEditForm.addEventListener('submit', function (evt) {
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
    const newCard = getCardElement({
        name,
        link
    });
    renderCard(newCard, cardsWrap);
    closeModal(cardModal);
    cardForm.reset();
});

initialCards.forEach(function(cardData) {
    const card = getCardElement(cardData);
    renderCard(card, cardsWrap); 
});
