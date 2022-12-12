!function(){"use strict";class e{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}resetValidation(){this._toggleButtonState(),this._inputEls.forEach((e=>{this._hideInputError(e)}))}_toggleButtonState(){return this._hasInvalidInput(this._inputEls)?this.disableButton():this.enableButton()}_hasInvalidInput(e){return!e.every((e=>e.validity.valid))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_checkInputValidity(e){if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}_setEventListeners(){this._inputEls=[...this._form.querySelectorAll(this._inputSelector)],this._submitButton=this._form.querySelector(this._submitButtonSelector),this.disableButton(),this._inputEls.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}class t{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleCardClick=s}_setEventListeners(){this._element.querySelector(".card__like-button").addEventListener("click",(()=>this._handleLikeButton())),this._element.querySelector(".card__delete-button").addEventListener("click",(()=>this._handleDeleteCard())),this._element.querySelector(".card__image").addEventListener("click",(()=>this._handleCardClick({link:this._link,name:this._name})))}_handleLikeButton(){this._element.querySelector(".card__like-button").classList.toggle("card__like-button_active")}_handleDeleteCard(){this._element.remove(),this._element=null}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}getView(){this._element=this._getTemplate();const e=this._element.querySelector(".card__image"),t=this._element.querySelector(".card__title");return e.src=this._link,e.alt=this._name,t.textContent=this._name,this._setEventListeners(),this._element}}const s=document.querySelector(".profile__edit-button"),n=document.querySelector("#add-button"),i={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"};class o{constructor(e){let{modalSelector:t}=e;this._modal=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}openModal(){this._modal.classList.add("modal__opened"),document.addEventListener("keyup",this._handleEscClose)}closeModal(){this._modal.classList.remove("modal__opened"),document.removeEventListener("keyup",this._handleEscClose)}_handleEscClose(e){e.preventDefault(),"Escape"===e.key&&this.closeModal()}setEventListeners(){this._modal.addEventListener("mousedown",(e=>{e.target.closest(".modal__content")&&!e.target.classList.contains("modal__close")||this.closeModal()}))}}class r extends o{constructor(e){let{modalSelector:t,handleFormSubmit:s,resetOnClose:n}=e;super({modalSelector:t}),this._resetOnClose=n,this._modalForm=this._modal.querySelector(".modal__form"),this._inputList=this._modalForm.querySelectorAll(".modal__input"),this._handleFormSubmit=s}_getInputValues(){const e={};return this._inputList.forEach((t=>e[t.name]=t.value)),e}openModal(){this._resetOnClose&&this._modalForm.reset(),super.openModal()}setEventListeners(){this._modalForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.closeModal(),this._modalForm.reset()})),super.setEventListeners()}}const l=new class{constructor(e,t){let{items:s,renderer:n}=e;this._initialArray=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._initialArray.reverse().forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>{l.addItem(a(e))}},".cards__list");function a(e){return new t(e,"#card-template",(e=>{u.openModal(e)})).getView()}l.renderItems(),new e(i,document.querySelector("#edit-profile-form")).enableValidation();const d=new e(i,document.querySelector("#add-card-form"));d.enableValidation();const c=new r({modalSelector:"#modal-edit",handleFormSubmit:e=>{m.setUserInfo(e)}});c.setEventListeners();const _=new r({modalSelector:"#modal-add",handleFormSubmit:e=>{l.addItem(a(e))},resetOnClose:!0});_.setEventListeners();const u=new class extends o{openModal(e){let{name:t,link:s}=e;this._modal.querySelector(".modal__preview-caption").textContent=t,this._modal.querySelector(".modal__preview-caption").alt=t,this._modal.querySelector(".modal__preview-image").src=s,super.openModal()}}({modalSelector:"#modal-image"});u.setEventListeners();const m=new class{constructor(e){let{userNameSelector:t,userTitleSelector:s}=e;this._userName=document.querySelector(t),this._userTitle=document.querySelector(s)}getUserInfo(){return{userName:this._userName.textContent,userTitle:this._userTitle.textContent}}setUserInfo(e){let{name:t,description:s}=e;this._userName.textContent=t,this._userTitle.textContent=s}}({userNameSelector:".profile__title",userTitleSelector:".profile__description"});s.addEventListener("click",(()=>{const{userName:e,userTitle:t}=m.getUserInfo();document.querySelector(".modal__input_type_name").value=e,document.querySelector(".modal__input_type_description").value=t,d.resetValidation(),c.openModal()})),n.addEventListener("click",(()=>{d.resetValidation(),_.openModal()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVgsV0FDUixHRndEb0MsQ0FBQ0osY0FBZSxpQkFDdER3QyxFQUFXaEMsb0JBRVgsTUFBTW1DLEVBQVcsSUduRUYsTUFDYnBILFlBQVksR0FBeUMsSUFBekMsaUJBQUV1SCxFQUFnQixrQkFBRUMsR0FBbUIsRUFDakRySCxLQUFLc0gsVUFBWTVELFNBQVMzQyxjQUFjcUcsR0FDeENwSCxLQUFLdUgsV0FBYTdELFNBQVMzQyxjQUFjc0csRUFDM0MsQ0FFQUcsY0FDRSxNQUFPLENBQ0xDLFNBQVV6SCxLQUFLc0gsVUFBVW5HLFlBQ3pCdUcsVUFBVzFILEtBQUt1SCxXQUFXcEcsWUFFL0IsQ0FFQStGLFlBQVksR0FBdUIsSUFBdkIsS0FBRWxFLEVBQUksWUFBRTJFLEdBQWEsRUFDL0IzSCxLQUFLc0gsVUFBVW5HLFlBQWM2QixFQUM3QmhELEtBQUt1SCxXQUFXcEcsWUFBY3dHLENBQ2hDLEdIbUQ0QixDQUM1QlAsaUJIN0NxQixrQkc4Q3JCQyxrQkg3QzJCLDBCR2dEN0JuRCxFQUFrQjNCLGlCQUFpQixTQUFTLEtBQzFDLE1BQU0sU0FBRWtGLEVBQVEsVUFBRUMsR0FBY1QsRUFBU08sY0FDekM5RCxTQUFTM0MsY0h4RFMsMkJHd0RpQzhFLE1BQVE0QixFQUMzRC9ELFNBQVMzQyxjSHhEZ0Isa0NHd0RpQzhFLE1BQVE2QixFQUNsRVgsRUFBaUJ4RixrQkFDakJ5RixFQUFpQnRDLFdBQVcsSUFHOUJQLEVBQWM1QixpQkFBaUIsU0FBUyxLQUN0Q3dFLEVBQWlCeEYsa0JBQ2pCNEYsRUFBYXpDLFdBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Nb2RhbFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWwpIHtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtID0gZm9ybUVsO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfVxuXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICB0aGlzLl9pbnB1dEVscy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7dGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCl9KTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0RWxzKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUJ1dHRvbigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbmFibGVCdXR0b24oKTtcbiAgfVxuICBcbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcbiAgICByZXR1cm4gIWlucHV0TGlzdC5ldmVyeSgoaW5wdXRFbCkgPT4gaW5wdXRFbC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICBkaXNhYmxlQnV0dG9uKCkge1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBlbmFibGVCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsKTtcbiAgICB9XG4gICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XG4gIH1cbiAgXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9pbnB1dEVscyA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcildO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk7XG4gICAgdGhpcy5faW5wdXRFbHMuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xuICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtldnQucHJldmVudERlZmF1bHQoKX0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZUxpa2VCdXR0b24oKSk7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKSk7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soeyBsaW5rOiB0aGlzLl9saW5rLCBuYW1lOiB0aGlzLl9uYW1lIH0pKTtcbiAgfVxuICAgIFxuICBfaGFuZGxlTGlrZUJ1dHRvbigpIHtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIikuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIF9oYW5kbGVEZWxldGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cbiAgICAgIFxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cblxuICBnZXRWaWV3KCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcbiAgICBjb25zdCBjYXJkVGl0bGUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XG4gICAgaW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2xpbms7XG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX25hbWU7XG4gICAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhcmlhYmxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmV4cG9ydCBjb25zdCBjYXJkQWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JfdmlzaWJsZVwiXG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkTGlzdEVsZW1lbnQ6IFwiLmNhcmRzX19saXN0XCIsXG4gIGNhcmRUZW1wbGF0ZTogXCIjY2FyZC10ZW1wbGF0ZVwiLFxuICBwcmV2aWV3TW9kYWw6IFwiI21vZGFsLWltYWdlXCIsXG5cbiAgcHJvZmlsZU5hbWVJbnB1dDogXCIubW9kYWxfX2lucHV0X3R5cGVfbmFtZVwiLFxuICBwcm9maWxlRGVzY3JpcHRpb25JbnB1dDogXCIubW9kYWxfX2lucHV0X3R5cGVfZGVzY3JpcHRpb25cIixcblxuICBwcm9maWxlRWRpdE1vZGFsOiBcIiNtb2RhbC1lZGl0XCIsXG4gIGNhcmRBZGRNb2RhbDogXCIjbW9kYWwtYWRkXCIsIFxuICBwcm9maWxlVGl0bGVFbGVtZW50OiBcIi5wcm9maWxlX190aXRsZVwiLFxuICBwcm9maWxlRGVzY3JpcHRpb25FbGVtZW50OiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiXG59O1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZHMgQXJyYXkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiXG4gIH1cbl07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX21vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX19vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5fbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX19vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFldnQudGFyZ2V0LmNsb3Nlc3QoXCIubW9kYWxfX2NvbnRlbnRcIikgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2VcIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFdpdGhGb3JtIGV4dGVuZHMgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcih7IG1vZGFsU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQsIHJlc2V0T25DbG9zZSB9KSB7XG4gICAgc3VwZXIoeyBtb2RhbFNlbGVjdG9yIH0pO1xuICAgIHRoaXMuX3Jlc2V0T25DbG9zZSA9IHJlc2V0T25DbG9zZTtcbiAgICB0aGlzLl9tb2RhbEZvcm0gPSB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX21vZGFsRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiAoZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlKSk7XG4gICAgcmV0dXJuIGZvcm1WYWx1ZXM7XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMuX3Jlc2V0T25DbG9zZSkge1xuICAgICAgdGhpcy5fbW9kYWxGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIHN1cGVyLm9wZW5Nb2RhbCgpO1xuICB9XG4gIFxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9tb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgIHRoaXMuX21vZGFsRm9ybS5yZXNldCgpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn0iLCJpbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQge1xuICBwcm9maWxlRWRpdEJ1dHRvbixcbiAgY2FyZEFkZEJ1dHRvbixcbiAgdmFsaWRhdGlvblNldHRpbmdzLFxuICBzZWxlY3RvcnMsXG4gIGluaXRpYWxDYXJkcyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBNb2RhbFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsV2l0aEZvcm0uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IE1vZGFsV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcbiAgICByZW5kZXJlcjogKGNhcmREYXRhKSA9PiB7XG4gICAgICBjYXJkU2VjdGlvbi5hZGRJdGVtKGdldENhcmRWaWV3KGNhcmREYXRhKSk7XG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0b3JzLmNhcmRMaXN0RWxlbWVudFxuKTtcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XG5cbmZ1bmN0aW9uIGdldENhcmRWaWV3KGNhcmREYXRhKSB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkRGF0YSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCAoZGF0YSkgPT4ge1xuICAgIGltYWdlTW9kYWwub3Blbk1vZGFsKGRhdGEpO1xuICB9KTtcbiAgcmV0dXJuIGNhcmQuZ2V0VmlldygpO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmFsaWRhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2ZpbGUtZm9ybVwiKTtcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmdzLCBlZGl0Rm9ybUVsZW1lbnQpO1xuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBhZGRGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtZm9ybVwiKTtcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGFkZEZvcm1FbGVtZW50KTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IExpc3RlbmVycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY29uc3QgZWRpdFByb2ZpbGVNb2RhbCA9IG5ldyBNb2RhbFdpdGhGb3JtKHtcbiAgbW9kYWxTZWxlY3Rvcjogc2VsZWN0b3JzLnByb2ZpbGVFZGl0TW9kYWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XG4gIH1cbn0pO1xuZWRpdFByb2ZpbGVNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBuZXdDYXJkTW9kYWwgPSBuZXcgTW9kYWxXaXRoRm9ybSh7XG4gIG1vZGFsU2VsZWN0b3I6IHNlbGVjdG9ycy5jYXJkQWRkTW9kYWwsXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgY2FyZFNlY3Rpb24uYWRkSXRlbShnZXRDYXJkVmlldyhkYXRhKSk7XG4gIH0sXG4gIHJlc2V0T25DbG9zZTogdHJ1ZSxcbn0pO1xubmV3Q2FyZE1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGltYWdlTW9kYWwgPSBuZXcgTW9kYWxXaXRoSW1hZ2Uoe21vZGFsU2VsZWN0b3I6IFwiI21vZGFsLWltYWdlXCJ9KTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZVNlbGVjdG9yOiBzZWxlY3RvcnMucHJvZmlsZVRpdGxlRWxlbWVudCxcbiAgdXNlclRpdGxlU2VsZWN0b3I6IHNlbGVjdG9ycy5wcm9maWxlRGVzY3JpcHRpb25FbGVtZW50LFxufSk7XG5cbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlck5hbWUsIHVzZXJUaXRsZSB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMucHJvZmlsZU5hbWVJbnB1dCkudmFsdWUgPSB1c2VyTmFtZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMucHJvZmlsZURlc2NyaXB0aW9uSW5wdXQpLnZhbHVlID0gdXNlclRpdGxlO1xuICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xuICBlZGl0UHJvZmlsZU1vZGFsLm9wZW5Nb2RhbCgpO1xufSk7XG5cbmNhcmRBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgbmV3Q2FyZE1vZGFsLm9wZW5Nb2RhbCgpO1xufSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5pdGlhbEFycmF5ID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKCkge1xuICAgIHRoaXMuX2luaXRpYWxBcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgoaXRlbSkgPT4ge3RoaXMuX3JlbmRlcmVyKGl0ZW0pfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufSIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsV2l0aEltYWdlIGV4dGVuZHMgTW9kYWwge1xuICBvcGVuTW9kYWwoeyBuYW1lLCBsaW5rIH0pIHtcbiAgICB0aGlzLl9tb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWNhcHRpb25cIikudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctY2FwdGlvblwiKS5hbHQgPSBuYW1lO1xuICAgIHRoaXMuX21vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIikuc3JjID0gbGluaztcbiAgICBzdXBlci5vcGVuTW9kYWwoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZVNlbGVjdG9yLCB1c2VyVGl0bGVTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJOYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX3VzZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlclRpdGxlU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJOYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJUaXRsZTogdGhpcy5fdXNlclRpdGxlLnRleHRDb250ZW50XG4gICAgfTtcbiAgfVxuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgZGVzY3JpcHRpb24gfSkge1xuICAgIHRoaXMuX3VzZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl91c2VyVGl0bGUudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgfVxufSJdLCJuYW1lcyI6WyJGb3JtVmFsaWRhdG9yIiwiY29uc3RydWN0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsInRoaXMiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWwiLCJlcnJvck1lc3NhZ2VFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJyZW1vdmUiLCJyZXNldFZhbGlkYXRpb24iLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfaW5wdXRFbHMiLCJmb3JFYWNoIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJlbmFibGVCdXR0b24iLCJpbnB1dExpc3QiLCJldmVyeSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmFibGVWYWxpZGF0aW9uIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJDYXJkIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2VsZW1lbnQiLCJfaGFuZGxlTGlrZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGVDYXJkIiwidG9nZ2xlIiwiX2dldFRlbXBsYXRlIiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2V0VmlldyIsImltYWdlRWxlbWVudCIsImNhcmRUaXRsZSIsInNyYyIsImFsdCIsInByb2ZpbGVFZGl0QnV0dG9uIiwiY2FyZEFkZEJ1dHRvbiIsInZhbGlkYXRpb25TZXR0aW5ncyIsIk1vZGFsIiwibW9kYWxTZWxlY3RvciIsIl9tb2RhbCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsInNldEV2ZW50TGlzdGVuZXJzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImNvbnRhaW5zIiwiTW9kYWxXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJyZXNldE9uQ2xvc2UiLCJzdXBlciIsIl9yZXNldE9uQ2xvc2UiLCJfbW9kYWxGb3JtIiwiX2lucHV0TGlzdCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2dldElucHV0VmFsdWVzIiwiZm9ybVZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJyZXNldCIsImNhcmRTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2luaXRpYWxBcnJheSIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJyZW5kZXJJdGVtcyIsInJldmVyc2UiLCJpdGVtIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwiY2FyZERhdGEiLCJnZXRDYXJkVmlldyIsImltYWdlTW9kYWwiLCJhZGRGb3JtVmFsaWRhdG9yIiwiZWRpdFByb2ZpbGVNb2RhbCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJuZXdDYXJkTW9kYWwiLCJ1c2VyTmFtZVNlbGVjdG9yIiwidXNlclRpdGxlU2VsZWN0b3IiLCJfdXNlck5hbWUiLCJfdXNlclRpdGxlIiwiZ2V0VXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJUaXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==