/* В файле index.js должны остаться:
1. объявления и инициализация глобальных констант и переменных с DOM-элементами страницы,
2. обработчики событий (при открытии и закрытии попапов; при отправке форм; обработчик, открывающий попап при клике по изображению карточки);
3. вызовы других функций, подключённых из созданных модулей, которым нужно будет передавать объявленные здесь переменные и обработчики.
*/

import '../pages/index.css'; // добавьте импорт главного файла стилей 
import { initialCards } from './cards.js';
import { addNewCard, deleteCard, LikeButtonClick, handleFormSubmitCard } from '../components/card.js';
import { openModal, closeModal } from '../components/modal.js';

// @todo: DOM узлы
const cardList = document.querySelector(".places__list"); // Получаем список, в который будем добавлять карточки
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalNewCard = document.querySelector('.popup_type_new-card');
const closePopup = document.querySelectorAll('.popup__close');
const overlayContent = document.querySelectorAll('.popup');
// Находим форму в DOM
const formEditProfile = document.querySelector('form[name="edit-profile"]'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formEditProfile.querySelector('input[name="name"]');  // Воспользуйтесь инструментом .querySelector()
const jobInput = formEditProfile.querySelector('input[name="description"]');  // Воспользуйтесь инструментом .querySelector()
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');
// Выберите элементы, куда должны быть вставлены значения полей
const nameInputProfile = document.querySelector('.popup__input_type_name');
const jobInputProfile = document.querySelector('.popup__input_type_description');
// Обработчик к форме
const formElementCard = document.querySelector('form[name="new-place"]');
const imgModal = document.querySelector('.popup_type_image');
const ImgModalUrl = imgModal.querySelector('.popup__image');
const ImgModalTitle = imgModal.querySelector('.popup__caption');

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

// Обработчик события для клавиши Esc
export function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openModals = document.querySelectorAll('.popup_is-opened');
    openModals.forEach(modal => {
      closeModal(modal);
    });
  }
}

// Функция для копирования значений полей профилья
function copyProfileValue() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openModal(formEditProfile.closest('.popup'));

}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmitProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  nameProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;

  // Закрываю окно
  closeModal(formEditProfile.closest('.popup'));

}

// Функция для класса анимации 
function addAnimationPopup() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.classList.add('popup_is-animated');
  });
}

// Функция клик по изображению
export function zoomImgModal(element) {

  ImgModalUrl.src = element.link;
  ImgModalUrl.alt = element.name;
  ImgModalTitle.textContent = element.name;

  openModal(imgModal);
}

formElementCard.addEventListener('submit', handleFormSubmitCard);
editButton.addEventListener('click', () => openModal(modalEditProfile));
addButton.addEventListener('click', () => openModal(modalNewCard));

// Вызов функции копирования значений при открытии модального окна
editButton.addEventListener('click', copyProfileValue);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', handleFormSubmitProfile);

// Вызов функцию анимации
document.addEventListener('DOMContentLoaded', addAnimationPopup);

overlayContent.forEach(evt => {
  evt.addEventListener('click', closeOverlay);
});

// @todo: Вывести карточки на страницу
// Создаем карточки из начального массива и добавляем их в список
initialCards.forEach(function (item) {
  const cardElement = addNewCard(item, LikeButtonClick, deleteCard);
  cardList.append(cardElement);
});
