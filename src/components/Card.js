export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._element.querySelector(".card__like-button").addEventListener("click", () => this._handleLikeButton());
    this._element.querySelector(".card__delete-button").addEventListener("click", () => this._handleDeleteCard());
    this._element.querySelector(".card__image").addEventListener("click", () => this._handleCardClick({ link: this._link, name: this._name }));
  }
    
  _handleLikeButton() {
    this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
      
  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    const imageElement = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");
    imageElement.src = this._link;
    imageElement.alt = this._name;
    cardTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}