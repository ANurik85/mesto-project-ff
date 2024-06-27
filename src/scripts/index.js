/*
В файле index.js должны остаться:
1. объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
2. обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
3. вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.
*/

import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { initialCards } from './cards.js';
import { addNewCard, deleteCard } from '../components/card.js';
import { openModal, closeModal } from '../components/modal.js';

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content; // Получаем шаблон карточки из HTML-документа
// @todo: DOM узлы
const cardList = document.querySelector(".places__list"); // Получаем список, в который будем добавлять карточки

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalNewCard = document.querySelector('.popup_type_new-card');
const closePopup = document.querySelectorAll('.popup__close');
const overlayContent = document.querySelectorAll('.popup');
//editButton.addEventListener('click', () => openModal(modalEditProfile));
addButton.addEventListener('click', () => openModal(modalNewCard));


export function closeAllModal(modal) {
  closePopup.forEach(popupClose => {
    popupClose.addEventListener('click', () => {
      closeModal(modal);
    });
  });
}
// Обработчик события для overlay
export function closeOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closeModal(evt.target);
  };
}
overlayContent.forEach(evt => {
  evt.addEventListener('click', closeOverlay);
});

// Обработчик события для клавиши Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const openModals = document.querySelectorAll('.popup_is-opened');
    openModals.forEach(modal => {
      closeModal(modal);
    });
  }
});



// Находим форму в DOM
const formElement = document.querySelector('form[name="edit-profile"]'); // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
const nameInput = formElement.querySelector('input[name="name"]');  // Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('input[name="description"]');  // Воспользуйтесь инструментом .querySelector()

//---------------------------------------------
const nameProfile = document.querySelector('.profile__title'); 
const jobProfile = document.querySelector('.profile__description'); 

// Функция для копирования значений полей профилья
function copyProfileValue() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openModal(formElement.closest('.popup'));
 
}

// Пример вызова функции копирования значений при открытии модального окна
editButton.addEventListener('click', copyProfileValue);

//---------------------------------------------

  // Обработчик «отправки» формы, хотя пока
  // она никуда отправляться не будет
  function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                            // Так мы можем определить свою логику отправки.
                                            // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
  const jobValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    const nameInputProfile = document.querySelector('.popup__input_type_name');
  const jobInputProfile = document.querySelector('.popup__input_type_description');

    // Вставьте новые значения с помощью textContent
    nameProfile.textContent = nameValue;
    jobProfile.textContent = jobValue;
  
// Закрываю окно
  closeModal(formElement.closest('.popup'));

  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);


// @todo: Вывести карточки на страницу
// Создаем карточки из начального массива и добавляем их в список
initialCards.forEach(function (item) {
  const cardElement = addNewCard(item, deleteCard);
  cardList.append(cardElement);
});