// Для работы с API создайте файл api.js. Все запросы присвойте переменным и экспортируйте их. В других модулях вы сможете импортировать эти функции и вызывать их.

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-18",
  headers: {
    authorization: "813eeaa3-fa56-4801-bdce-a3b4cdeab4d2",
    "Content-Type": "application/json",
  },
};

const handleResponse = (res, errorText) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(errorText);
  }
};

// Загрузка информации о пользователе с сервера
export function getInitialUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) =>
    handleResponse(res, "Ошибка по загрузке информации о пользователе:")
  );
}

// Загрузка карточек с сервера
// Инициализация карточек
export function getInitialCards() {
  // Код для получения карточек
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) =>
    handleResponse(res, "Ошибка пo загрузка карточек с сервера:")
  );
}

// Редактирование профиля
export function patchProfileData(userData) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(userData),
  }).then((res) => handleResponse(res, "Ошибка при сохранении данных:"));
}

// Обновление аватара
export function updateAvatar(newAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: newAvatar }), // Передаем новую ссылку на аватар в теле запроса
  }).then((res) => handleResponse(res, "Ошибка при обновлении аватара:"));
}

// Добавление новой карточки
export function postAddCards(cardData) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(cardData),
  }).then((res) =>
    handleResponse(res, "Ошибка при добавление новой карточки:")
  );
}

export function updateLikeCount(cardId, isLiked) {
  const method = isLiked ? "DELETE" : "PUT";

  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method,
    headers: config.headers,
  })
    .then((res) => handleResponse(res, "Ошибка по обновлениие лайка:"))
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => handleResponse(res, "Ошибка по удаление карточки:"))
}
