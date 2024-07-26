// Для работы с API создайте файл api.js. Все запросы присвойте переменным и экспортируйте их. В других модулях вы сможете импортировать эти функции и вызывать их.
const profileImage = document.querySelector(".profile__image");
const saveText = document.querySelector(".popup__button");
export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-18",
  headers: {
    authorization: "813eeaa3-fa56-4801-bdce-a3b4cdeab4d2",
    "Content-Type": "application/json",
  },
};

// Загрузка информации о пользователе с сервера
export function getInitialUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Загрузка карточек с сервера
// Инициализация карточек
export function getInitialCards() {
  // Код для получения карточек
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

// Редактирование профиля
export function patchProfileData(arrayInfo) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(arrayInfo),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при сохранении данных");
      }
      // Возвращаем что-то, если нужно
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка при сохранении данных:", error);
      // Обработка ошибок (если необходимо)
      throw error; // Прокидываем ошибку дальше
    });
}

export function showLoadingSaveText() {
  saveText.textContent = "Сохранить...";
}

export function hideLoadingSaveText() {
  saveText.textContent = "Сохранить";
}

// Обновление аватара
export function updateAvatar(newAvatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar: newAvatar }), // Передаем новую ссылку на аватар в теле запроса
  })
    .then((res) => {
      if (res.ok) {
        profileImage.style.backgroundImage = `url('${newAvatar}')`;
        return res.json();
      } else {
        console.error("Ошибка при обновлении аватара:", res.status);
      }
    })
    .catch((error) => {
      console.error("Ошибка при выполнении запроса:", error);
    });
}

// Добавление новой карточки
export function postAddCards(arrayInfo) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(arrayInfo),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при добавление новой карточки");
      }
      // Возвращаем что-то, если нужно
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка по добавление карточки:", error);
      // Обработка ошибок (если необходимо)
      throw error; // Прокидываем ошибку дальше
    });
}

export function updateLikeCount(cardId, isLiked) {
  const method = isLiked ? "DELETE" : "PUT";

  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method,
    headers: config.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка по обновлениие лайка");
      }
      return response.json();
    })

    .catch((error) => {
      console.error("Ошибка по обработке лайка:", error);
    });
}

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка по удаление карточки");
      }
      // Успешное удаление карточки
      console.log("Карточка успешно удалена");
      // Возвращаем что-то, если нужно
      return response.json();
    })

    .catch((error) => {
      console.error("Ошибка по обработке удаление карточки:", error);
    });
}
