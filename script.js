import "./pet.js";

//popup starts

let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup");
let openPopupButtons = document.querySelectorAll(".open-popup");
let closePopupButton = document.querySelector(".close-popup");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupBg.classList.add("active");
    popup.classList.add("active");
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active");
  popup.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
  }
});
//popup ends

//popup-info-pet starts

let popupPetInfoBody = document.querySelector(".popup__pet-info-body");
let popupWrapper = document.querySelector(".popup__wrapper");
let openPopupInfoLinkButton = document.querySelectorAll(".button__pets-card");
let closePopupPetButton = document.querySelector(".close-popup-pet");

openPopupInfoLinkButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    popupPetInfoBody.classList.add("active");
    popupWrapper.classList.add("active");
  });
});

closePopupPetButton.addEventListener("click", () => {
  popupPetInfoBody.classList.remove("active");
  popupWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popupPetInfoBody) {
    popupPetInfoBody.classList.remove("active");
    popupWrapper.classList.remove("active");
  }
});

//popup-info-pet ends
