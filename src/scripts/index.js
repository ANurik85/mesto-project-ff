/* В файле index.js должны остаться:
1. объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
2. обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
3. вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.
*/

import "../pages/index.css"; // добавьте импорт главного файла стилей
import {
  addNewCard /*  deleteCard, */ /* LikeButtonClick */,
} from "../components/card.js";
import { openModal, closeModal } from "../components/modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialCards,
  getInitialUser,
  patchProfileData,
  postAddCards,
  updateAvatar,
  deleteCard,
  hideLoadingSaveText,
  showLoadingSaveText,
} from "./api.js";

// @todo: DOM узлы
const cardList = document.querySelector(".places__list"); // Получаем список, в который будем добавлять карточки
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const addButtonAvatar = document.querySelector(".profile__image-block"); //--------
const modalEditProfile = document.querySelector(".popup_type_edit");
const modalNewCard = document.querySelector(".popup_type_new-card");
const modalNewAvatar = document.querySelector(".popup_type_new-avatar"); //--------
const closePopup = document.querySelectorAll(".popup__close");
const overlayContent = document.querySelectorAll(".popup");
// Находим форму в DOM
const formEditProfile = document.querySelector('form[name="edit-profile"]'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formEditProfile.querySelector('input[name="name"]'); // Воспользуйтесь инструментом .querySelector()
const jobInput = formEditProfile.querySelector('input[name="description"]'); // Воспользуйтесь инструментом .querySelector()
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");
// Выберите элементы, куда должны быть вставлены значения полей
const nameInputProfile = document.querySelector(".popup__input_type_name");
const jobInputProfile = document.querySelector(
  ".popup__input_type_description"
);
// Обработчик к форме
const formElementCard = document.querySelector('form[name="new-place"]');
const formElementAvatar = document.querySelector('form[name="new-avatar"]'); //--------
const imgModal = document.querySelector(".popup_type_image");
const ImgModalUrl = imgModal.querySelector(".popup__image");
const ImgModalTitle = imgModal.querySelector(".popup__caption");
// Получаем значения полей форми
const nameInputCard = document.querySelector('input[name="place-name"]');
const linkInputCard = document.querySelector('input[name="link"]');
const linkInputAvatar = document.querySelector('input[name="link-avatar"]'); //--------

const profileImage = document.querySelector(".profile__image");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const likeCounter = document.querySelector(".counter__like");
// Обработчик события для overlay
export function closeOverlay(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

// Функция для копирования значений полей профилья
function copyProfileValue() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openModal(formEditProfile.closest(".popup"));
}

// Обработчик «отправки» формы для редактирование профиля
function handleFormSubmitProfile(evt) {
  evt.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получение значений из полей формы
  const nameValue = nameInput.value;
  const aboutValue = jobInput.value;

  // Создание объекта с обновленными данными
  const updatedProfileData = {
    name: nameValue,
    about: aboutValue,
    // Другие свойства, если необходимо
  };

  showLoadingSaveText(); // Показываем текст загрузки

  patchProfileData(updatedProfileData)
    .then(() => {
      // После успешной загрузки:
      hideLoadingSaveText(); // Скрываем текст загрузки
      closeModal(formEditProfile.closest(".popup")); // Закрываем
    })
    .catch((err) => {
      console.error("Ошибка при сохранении данные профиля:", err);
      showLoadingSaveText(); // Показываем текст загрузки
    });
}

// Функция обновление аватара
function handleFormSubmitAvatar(evt) {
  evt.preventDefault(); // Отменяем стандартную отправку форми
  // Получаем значения полей форми
  const linkValueAvatar = linkInputAvatar.value;
  showLoadingSaveText(); // Показываем текст загрузки
  updateAvatar(linkValueAvatar)
    .then(() => {
      // После успешной загрузки:
      hideLoadingSaveText(); // Скрываем текст загрузки
      closeModal(evt.target.closest(".popup")); // Закрываем модальное окно
      evt.target.reset(); // Сбрасываем значения формы
    })
    .catch((err) => {
      console.error("Ошибка при обновлении аватара:", err);
      showLoadingSaveText(); // Показываем текст загрузки
    });
}

// Функция добавления карточки
function handleFormSubmitCard(evt) {
  evt.preventDefault(); // Отменяем стандартную отправку форми

  // Получаем значения полей форми
  const nameValueCard = nameInputCard.value;
  const linkValueCard = linkInputCard.value;
  // Создаем объект
  const newItemCard = {
    name: nameValueCard,
    link: linkValueCard,
  };
  showLoadingSaveText(); // Показываем текст загрузки
  postAddCards(newItemCard)
    .then(() => {
      // После успешной загрузки:
      hideLoadingSaveText(); // Скрываем текст загрузки
      // Закрываем модальное окно
      closeModal(evt.target.closest(".popup"));
      evt.target.reset();
    })
    .catch((err) => {
      console.error("Ошибка по добавление карточки::", err);
      showLoadingSaveText(); // Показываем текст загрузки
    });

  // Создаем новую карточки
  const newCard = addNewCard(
    newItemCard,
    /*  LikeButtonClick, */
    deleteCard,
    cardIds,
    cardsData,
    cardId,
    userId
  );
  // Добавляем карточку в начало
  cardList.prepend(newCard);
}

// Функция для класса анимации
function addAnimationPopup() {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.classList.add("popup_is-animated");
  });
}

// Функция клик по изображению
export function zoomImgModal(element) {
  ImgModalUrl.src = element.link;
  ImgModalUrl.alt = element.name;
  ImgModalTitle.textContent = element.name;

  openModal(imgModal);
}

formElementCard.addEventListener("submit", handleFormSubmitCard);
editButton.addEventListener("click", () => openModal(modalEditProfile));
addButton.addEventListener("click", () => openModal(modalNewCard));
formElementAvatar.addEventListener("submit", handleFormSubmitAvatar);
addButtonAvatar.addEventListener("click", () => openModal(modalNewAvatar));

// Вызов функции копирования значений при открытии модального окна
editButton.addEventListener("click", copyProfileValue);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener("submit", handleFormSubmitProfile);
// Вызов функцию анимации
document.addEventListener("DOMContentLoaded", addAnimationPopup);
// Вызов функцию закрытие по Overlay
overlayContent.forEach((evt) => {
  evt.addEventListener("click", closeOverlay);
});
// Находим и закрываем открытое модальное окно
closePopup.forEach((button) =>
  button.addEventListener("click", () => {
    const openModal = document.querySelector(".popup_is-opened");
    if (openModal) {
      closeModal(openModal);
    }
  })
);

// @todo: Вывести карточки на страницу

// Вывод карточек на страницу

export let userId = null;
export let cardIds = [];
export let cardId = [];

Promise.all([getInitialCards(), getInitialUser()])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    cardIds = cardsData._id;
    cardId = cardsData._id;
    /*  cardLike = cardsData.likes.length; */

    cardsData.forEach(function (item) {
      const newCard = addNewCard(
        item,
        deleteCard,
        cardIds,
        cardsData,
        cardId,
        userId
      );

      // Добавляем обработчик клика на кнопку удаления
      const deleteButton = newCard.querySelector(".card__delete-button");
      if (item.owner._id === userId) {
        deleteButton.addEventListener("click", () => {
          deleteCard(item._id).then(() => {
            // Удаляем карточку из интерфейса
            newCard.remove();
          });
        });
      } else {
        deleteButton.style.display = "none";
      }

      cardList.append(newCard);
    });

    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.src = userData.avatar;
  })
  .catch((err) => {
    console.log("Ошибка: ", err);
  });

// вызов функций enableValidation и clearValidation должен находиться в файле index.js

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// Вызовем функцию
enableValidation(validationConfig);

const profileForm = document.querySelector('.popup__form[name="edit-profile"]');

// Очистка ошибок валидации при открытии формы профиля
clearValidation(profileForm, validationConfig);
