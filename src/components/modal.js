/*
Работу модальных окон — в файл modal.js. Оттуда экспортируйте функции openModal и closeModal, принимающие в качестве аргумента DOM-элемент модального окна, с которым нужно произвести действие.
*/

import { closeAllModal } from '../scripts/index.js'; 

export function openModal(modal) {
    modal.classList.add('popup_is-opened');
    modal.classList.add('popup_is-animated');
    closeAllModal(modal);

};

export function closeModal(modal) {
   modal.classList.remove('popup_is-opened');
   modal.classList.remove('popup_is-animated');
};