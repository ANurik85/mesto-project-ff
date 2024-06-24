 
import { initialCards } from './cards.js';
 import '../pages/index.css'; // добавьте импорт главного файла стилей 

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа

// @todo: DOM узлы
const cardList = document.querySelector(".places__list"); // Получаем список, в который будем добавлять карточки

// @todo: Функция создания карточки
function addNewCard(item, deleteCard) { // Функция для создания новой карточки
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
function deleteCard(evt) { // Функция для удаления карточки
  
  evt.target.closest(".card").remove(); // Удаляем ближайшую родительскую карточку
}

// @todo: Вывести карточки на страницу
// Создаем карточки из начального массива и добавляем их в список
initialCards.forEach(function (item) {
  const cardElement = addNewCard(item, deleteCard);
  cardList.append(cardElement);
});


