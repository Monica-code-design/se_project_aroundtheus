import { openModal } from "./utils.js";

class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
    }

    _setEventListeners() {
        this._element
        .querySelector(".card__like-button")
        .addEventListener("click", () => this._handleLikeButton());

        this._element
        .querySelector(".card__delete-button")
        .addEventListener("click", () => this._handleDeleteCard());

        this._element
        .querySelector(".card__image")
        .addEventListener("click", () => this._handlePreviewPicture());
    }
    
    _handleLikeButton() {
        this._element
          .querySelector(".card__like-button")
          .classList.toggle("card__like-button_active");
      }

      _handleDeleteCard() {
        this._element.remove();
        this._element = null;
      }

      _handlePreviewPicture() {
        const previewImageElement = document.querySelector(".modal__preview-image");
        const previewModalCaption = document.querySelector(".modal__preview-caption");
        previewImageElement.src = this._link;
        previewModalCaption.textContent = this._name;
        previewImageElement.alt = `Photo of ${this._name}`;
        const modal = document.querySelector("#modal-image");
        openModal(modal);
      }

      _getTemplate() {
        return document
        .querySelector(this._cardSelector)
        .content.querySelector(".card")
        .cloneNode(true);
    }

    getView(){
        this._element = this._getTemplate();
        const previewImageElement = this._element.querySelector(".card__image");
        const cardTitle = this._element.querySelector(".card__title");
        previewImageElement.src = this._link;
        previewImageElement.alt = this._name;
        cardTitle.textContent = this._name;

        this._setEventListeners();
        return this._element;
    }
}

export default Card;