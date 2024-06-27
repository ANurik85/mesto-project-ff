/*
Функции для работы с карточками проекта Mesto вынесите в файл card.js, из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.
*/

import { cardTemplate } from '../scripts/index.js';
import { openModal, closeModal } from '../components/modal.js';

// @todo: Функция создания карточки
export function addNewCard(item, deleteCard) { // Функция для создания новой карточки
  const cardListItem = cardTemplate.querySelector('.places__item').cloneNode(true); // Клонируем элемент карточки из шаблона
  const cardImage = cardListItem.querySelector('.card__image'); // Находим элемент изображения в карточке
  cardImage.src = item.link; // Устанавливаем ссылку на изображение
  cardImage.alt = item.name; // Устанавливаем альтернативный текст для изображения
  cardListItem.querySelector('.card__title').textContent = item.name;  // Устанавливаем заголовок карточки

  const deleteButton = cardListItem.querySelector(".card__delete-button"); // Находим кнопку удаления и добавляем обработчик события
  deleteButton.addEventListener('click', deleteCard);
  
  return cardListItem; // Возвращаем созданную карточку
}

// @todo: Функция удаления карточки
export function deleteCard(evt) { // Функция для удаления карточки
  evt.target.closest(".card").remove(); // Удаляем ближайшую родительскую карточку
}
