/*
Функции для работы с карточками проекта Mesto вынесите в файл card.js, из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.
*/


import { openModal, closeModal } from '../components/modal.js';
import { zoomImgModal } from '../scripts/index.js';

const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа
// Получаем значения полей форми
const nameInputCard = document.querySelector('input[name="place-name"]');
const linkInputCard = document.querySelector('input[name="link"]');

// @todo: Функция создания карточки
export function addNewCard(item, LikeButtonClick, deleteCard) { // Функция для создания новой карточки
  // @todo: Темплейт карточки
  const cardListItem = cardTemplate.querySelector('.places__item').cloneNode(true); // Клонируем элемент карточки из шаблона
  const cardImage = cardListItem.querySelector('.card__image'); // Находим элемент изображения в карточке
  cardImage.src = item.link; // Устанавливаем ссылку на изображение
  cardImage.alt = item.name; // Устанавливаем альтернативный текст для изображения
  cardListItem.querySelector('.card__title').textContent = item.name;  // Устанавливаем заголовок карточки

  cardImage.addEventListener("click", function () {
    zoomImgModal(item);
  });

  const deleteButton = cardListItem.querySelector(".card__delete-button"); // Находим кнопку удаления и добавляем обработчик события
  deleteButton.addEventListener('click', deleteCard);

  const likeButton = cardListItem.querySelector('.card__like-button');
  likeButton.addEventListener('click', LikeButtonClick);

  return cardListItem; // Возвращаем созданную карточку
}

//функцию обработчика лайка
export function LikeButtonClick(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция добавления карточки
export function handleFormSubmitCard(evt) {
  evt.preventDefault(); // Отменяем стандартную отправку форми

  // Получаем значения полей форми
  const nameValueCard = nameInputCard.value;
  const linkValueCard = linkInputCard.value;

  // Создаем объект
  const newItemCard = {
    name: nameValueCard,
    link: linkValueCard
  };

  // Создаем новую карточки
  const newCard = addNewCard(newItemCard, deleteCard);

  // Добавляем карточку в начало
  const cardsContainer = document.querySelector('.places__list');
  cardsContainer.prepend(newCard);

  // Закрываем модальное окно
  closeModal(evt.target.closest('.popup'));
  evt.target.reset();
}

// @todo: Функция удаления карточки
export function deleteCard(evt) { // Функция для удаления карточки
  evt.target.closest(".places__item").remove(); // Удаляем ближайшую родительскую карточку
}
