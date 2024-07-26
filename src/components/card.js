/*
Функции для работы с карточками проекта Mesto вынесите в файл card.js, из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.
*/
import { zoomImgModal, cardsData, cardId, userId, likesCount } from "../scripts/index.js";
import { updateLikeCount, deleteCard } from "../scripts/api.js";

const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа

// @todo: Функция создания карточки
export function addNewCard(item, deleteCard, cardsData, cardId, userId) {
  // Функция для создания новой карточки
  // @todo: Темплейт карточки

  const cardListItem = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true); // Клонируем элемент карточки из шаблона
  const cardImage = cardListItem.querySelector(".card__image"); // Находим элемент изображения в карточке
  cardImage.src = item.link; // Устанавливаем ссылку на изображение
  cardImage.alt = item.name; // Устанавливаем альтернативный текст для изображения
  cardListItem.querySelector(".card__title").textContent = item.name; // Устанавливаем заголовок карточки

  cardImage.addEventListener("click", function () {
    zoomImgModal(item);
  });

  const likeButton = cardListItem.querySelector(".card__like-button");
  const likeCounter = cardListItem.querySelector(".counter__like");

  // Предположим, у нас есть переменная, хранящая информацию о текущем состоянии лайка
  let isLiked = false;
  let likesCount = item.likes.length; // Начальное количество лайков

  // Обработчик лайка
  likeButton.addEventListener("click", () => {
    updateLikeCount(item._id, isLiked, likesCount).then((data) => {
      isLiked = !isLiked;
      likesCount = data.likes.length;
      likeButton.classList.toggle("card__like-button_is-active", isLiked);
      likeCounter.textContent = likesCount;
    });
  });

  // Устанавливаем начальное состояние лайка и счетчика
  likeButton.classList.toggle("card__like-button_is-active", isLiked);
  likeCounter.textContent = likesCount;

  return cardListItem; // Возвращаем созданную карточку
}
