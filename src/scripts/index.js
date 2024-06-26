/*
В файле index.js должны остаться:
1. объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
2. обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
3. вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.

!!! Чтобы было чуточку понятнее: вызов функции создания карточки должен находиться в файле index.js, но само объявление функции — в card.js. 
*/ 

import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { initialCards } from './cards.js';
import { addNewCard, deleteCard } from '../components/card.js';
import { openModal, closeModal } from '../components/modal.js';


// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа
// @todo: DOM узлы
const cardList = document.querySelector(".places__list"); // Получаем список, в который будем добавлять карточки

const openButton = document.querySelector('.button');
const modal = document.querySelectorAll('.popup');
const closeButton = document.querySelector('.popup__close');


openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
  

// @todo: Вывести карточки на страницу
// Создаем карточки из начального массива и добавляем их в список
initialCards.forEach(function (item) {
  const cardElement = addNewCard(item, deleteCard, openModal);
  cardList.append(cardElement);
});


