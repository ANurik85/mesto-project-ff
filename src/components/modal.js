/*
Работу модальных окон — в файл modal.js. Оттуда экспортируйте функции openModal и closeModal, принимающие в качестве аргумента DOM-элемент модального окна, с которым нужно произвести действие.
*/


import { modal } from '../scripts/index.js';


export function openModal(item) {
  
  item.classList.add('popup_is-opened');
 
};

export function closeModal(item) {
 
  item.classList.remove('popup_is-opened');

};












/*



function openModal(modal) {
 
  modal.classList.add('popup_is-opened');

  
};

// 



openButton.addEventListener('click', function (modal) {
  
  openModal(modal);
});


//openButton.addEventListener('click', openModal);

*/

/*
  const button = document.querySelector('.button');
const modal = document.querySelector('.popup');
const form = document.forms['new-place'];


function openModal(element) {
  if (document.querySelector('.popup')) {
    element.classList.add('popup_is-opened');

  }
}

button.addEventListener('click', openModal);

*/

/*
  
  function allClose(element) {
    const popupClose = element.querySelector('.popup__close');

    popupClose.addEventListener("click", () => {

      closeModal(element);
    });
  }
*/

/*


const modal = document.querySelectorAll('.popup');
const openButton = document.querySelector('.button');
const closeButton = document.querySelector('.popup__close');


function openModal(modal) {
  if (document.querySelector('.popup')) {
    modal.classList.add('popup_is-opened');

  }
}

openButton.addEventListener('click', function () {

  openModal(modal);
});



function closeModal(modal) {
  
  modal.classList.remove('popup_is-opened');

  
}

closeButton.addEventListener('click', function () {

  closeModal(modal);
});


*/
/*
const button = document.querySelector('.button');

const form = document.forms.myForm;
const input = form.elements.myInput;
const textArea = form.elements.myTextArea;

// по нажатию на кнопку выведем
// в консоль значения текстовых полей
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(input.value); // значение input
  console.log(textArea.value); // значение textArea
});
*/