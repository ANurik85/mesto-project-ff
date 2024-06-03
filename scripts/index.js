// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const cardList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function addNewCard(item, deleteCard) {
  const cardListItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardListItem.querySelector('.card__image').src = item.link;
  cardListItem.querySelector('.card__image').alt = item.name;
  cardListItem.querySelector('.card__title').textContent = item.name;
  const deleteButton = cardListItem.querySelector(".card__delete-button");
  deleteButton.addEventListener('click', deleteCard);
  return cardListItem;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
  const cardElement = addNewCard(item, deleteCard);
  cardList.append(cardElement);
});
  