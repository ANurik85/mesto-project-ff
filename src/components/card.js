/*
Функции для работы с карточками проекта Mesto вынесите в файл card.js, из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.
*/

import { updateLikeCount, deleteCard } from "../scripts/api.js";

const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа

// @todo: Функция создания карточки
export function createNewCard(
  cardData,
  deleteCardCallback,
  likeCardCallback,
  zoomCardCallback,
  userId
) {
  // Функция для создания новой карточки
  // @todo: Темплейт карточки
  const cardListItem = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true); // Клонируем элемент карточки из шаблона
  const cardImage = cardListItem.querySelector(".card__image"); // Находим элемент изображения в карточке
  cardImage.src = cardData.link; // Устанавливаем ссылку на изображение
  cardImage.alt = cardData.name; // Устанавливаем альтернативный текст для изображения
  cardListItem.querySelector(".card__title").textContent = cardData.name; // Устанавливаем заголовок карточки
  cardImage.addEventListener("click", () =>
    zoomCardCallback(cardData)
  ); /* cardData */

  const likeButton = cardListItem.querySelector(".card__like-button");
  const likeCounter = cardListItem.querySelector(".counter__like");
  const deleteButton = cardListItem.querySelector(".card__delete-button");

  const Liked = likeButton.classList.contains("card__like-button");
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  const likesCount = cardData.likes.length; // Начальное количество лайков
  likeCounter.textContent = likesCount; // Устанавливаем начальное состояние лайка и счетчика

  if (cardData.likes.some((like) => like._id === userId)) {
    // Карточка лайкнута
    likeButton.classList.add("card__like-button_is-active");
  } else {
    // Карточка не лайкнута
    likeButton.classList.add("card__like-button");
  }

  likeButton.addEventListener("click", () =>
    likeCardCallback(likeButton, likeCounter, cardData._id)
  );

  // Добавляем обработчик клика на кнопку удаления
  if (cardData.owner._id === userId) {
    deleteButton.addEventListener("click", () => {
      deleteCardCallback(cardData._id, cardListItem);
    });
  } else {
    deleteButton.style.display = "none";
  }
  return cardListItem; // Возвращаем созданную карточку
}

export const likeCardCallback = (likeButton, likeCounter, cardId) => {
  const isLiked = likeButton.classList.contains("card__like-button_is-active");
  updateLikeCount(cardId, isLiked)
    .then((data) => {
      likeButton.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = data.likes.length;
    })
    .catch((error) => {
      console.error("Ошибка по обработке лайка:", error);
    });
};

export const deleteCardCallback = (cardId, card) => {
  deleteCard(cardId)
    .then(() => {
      card.remove();
    })
    .catch((error) => {
      console.error("Ошибка по обработке удаление карточки:", error);
    });
};
