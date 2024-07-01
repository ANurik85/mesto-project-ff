/*
Работу модальных окон — в файл modal.js. Оттуда экспортируйте функции openModal и closeModal, принимающие в качестве аргумента DOM-элемент модального окна, с которым нужно произвести действие.
*/

import { closeAllModal } from '../scripts/index.js';

export function openModal(modal) {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEsc);
    closeAllModal(modal);
};

export function closeModal(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEsc);
};

// Обработчик события для клавиши Esc
export function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const openModal = document.querySelector('.popup_is-opened');
        if (openModal) {
            closeModal(openModal);
        }
    }
}
