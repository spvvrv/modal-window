// 1. Я нашла имя животного, как передать его в innerHTML, чтобы брали значения именно этого объекта??
// 2. subtitle is not defined - почему??
// 3.   container.innerHTML = ``; - null is not an object (evaluating 'container.innerHTML = ""')
// 4, function renderPets(pets) - для чего эта функция вообще нужна??
export const pets = [
  {
    name: "Katrine",
    subtitle: "Katrine the kitten",
    description:
      "Katrine the kitten is patiently waiting to find a new forever home.",
    image: "./img/pets-katrine-3.jpg",
    properties: {
      Age: "2 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  },
  {
    name: "Betty",
    subtitle: "Betty the kitten",
    description:
      "Betty the kitten is patiently waiting to find a new forever home.",
    image: "./img/pets-katrine.jpg",
    properties: {
      Age: "2 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  },
  {
    name: "Scarlet",
    subtitle: "Scarlet the dog",
    description:
      "Scarlet the dog is patiently waiting to find a new forever home.",
    image: "./img/pets-scarlet.jpg",
    properties: {
      Age: "7 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  },
  {
    name: "Timmy",
    subtitle: "Timmy the puppy",
    description:
      "Timmy the puppy is patiently waiting to find a new forever home.",
    image: "./img/pets-timmy.jpg",
    properties: {
      Age: "11 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  },
  {
    name: "Woody",
    subtitle: "Woody the labrador",
    description:
      "Woody the labrador is patiently waiting to find a new forever home.",
    image: "./img/pets-woody.jpg",
    properties: {
      Age: "5 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  },
  {
    name: "Jack",
    subtitle: "Jack the puppy",
    description:
      "Jack the puppy is patiently waiting to find a new forever home.",
    image: "./img/pets-katrine-2.jpg",
    properties: {
      Age: "6 months",
      Inoculations: "none",
      Diseases: "none",
      Parasites: "none"
    }
  }
];

function openModal(petName) {
  const { image, description, subtitle, properties } = pets.find(
    (pet) => pet.name === petName
  );
  //вернет первое значение, если оно соответствует условию (если это имя есть в массиве)

  const modalPopupWrapper = document.querySelector("#pet-popup-container"); //вывела содержимое объекта со всеми тегами
  modalPopupWrapper.innerHTML = `
      <img src="${image}" alt="" width="500" height="500">
      <div class="popup__about">
          <img src="/img/svg/popup__close.svg" alt="" class="close-popup-pet">
          <h2 class="popup__title">${petName}</h2>
          <h3 class="popup__subtitle">${subtitle}</h3>
          <div class="popup__text">${description}</div>
          <ul class="popup__information">
              ${Object.entries(properties)
                .map(([key, value]) => {
                  return `<li class="popup__pet-info">${key}: ${value}</li>`;
                })
                .join("")}
          </ul>
      </div>
    `;

  let popupPetInfoBody = document.querySelector(".popup__pet-info-body");
  let popupWrapper = document.querySelector(".popup__wrapper");

  popupPetInfoBody.classList.add("active");
  popupWrapper.classList.add("active");

  let closePopupPetButton = document.querySelector(".close-popup-pet");
  closePopupPetButton.addEventListener("click", () => {
    popupPetInfoBody.classList.remove("active");
    popupWrapper.classList.remove("active");
  });
}

function renderPets(pets) {
  const container = document.querySelector(".pets__cards");

  container.innerHTML = ``;

  pets.forEach((pet) => {
    container.innerHTML += `
      <div class="pets__card">
      <img src="${pet.image}" alt="">
      <p>${pet.name}</p>
      <button data-pet-name="${pet.name}" class="button__pets-card">Learn more</button>
  </div>
      `;
  });

  document.querySelectorAll(".button__pets-card").forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.petName);
    });
  });
}

renderPets(pets);

// ___________

// const modalPopupWrapper = document.getElementById('#pet-popup-container');
// console.log(modalPopupWrapper); //вывела активное модальное окно

// const betty = document.querySelectorAll('[data-item="1"]')
// console.log(betty) //поиск по data-item, которое присвоила карточке

// const modalPopupWrapperContent = modalPopupWrapper.innerHTML; //получили базовое содержимое вместе со всеми тегами
// console.log(modalPopupWrapperContent);

// modalPopupWrapper.innerHTML = 'test1'; //меняю содержимое в базовом модальном окне

// modalPopupWrapper.innerHtml = `${modalPopupWrapperContent} <p>test2</p>`;
// console.log(modalPopupWrapper.innerHtml); //добавляю к базовому содержимому параграф

// const modalPopupWrapper = document.querySelector("#pet-popup-container");
// const modalPopupWrapperFull = modalPopupWrapper.outerHTML; //получили полную оболочку узла
// console.log(modalPopupWrapperFull);
// modalPopupWrapper.outerHTML = 'test2' //поменяли всю оболочку узла

// const modalPopupWrapper = document.querySelector("#pet-popup-container");
// const modalPopupWrapperTextContent = modalPopupWrapper.textContent;
// console.log(modalPopupWrapperTextContent);//получили только текст из узла
// modalPopupWrapper.textContent = `test3` //все прописанные теги будут преобразованы в строки, записывает текст "безопасно"
