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
const modal = document.querySelector(".modal"); 
const profileEditForm = document.querySelector(".modal__form")
const profileEditButton = document.querySelector(".profile__edit-button");
const modalClose = document.querySelector(".modal__close");
const profileNameElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");
const profileNameInput = profileEditForm.querySelector(".modal__input_type_name");
const profileDescriptionInput = profileEditForm.querySelector(".modal__input_type_description");

function openModal() {
    modal.classList.add("modal__opened");
}

function closeModal() {
    modal.classList.remove("modal__opened"); 
}

profileEditButton.addEventListener('click', () => { 

    profileNameInput.value = profileNameElement.textContent;
    profileDescriptionInput.value = profileDescriptionElement.textContent;

    openModal();
});

modalClose.addEventListener('click', closeModal);

profileEditForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    const nameInput = evt.target.name.value;
    const descriptionInput = evt.target.description.value;

    profileNameElement.textContent = nameInput;
    profileDescriptionElement.textContent = descriptionInput;

    closeModal();
});

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;

    return cardElement;
};

for (let i = 0; i < initialCards.length; i++) {
    cardsWrap.append(getCardElement(initialCards[i]));
};
