(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-18",headers:{authorization:"813eeaa3-fa56-4801-bdce-a3b4cdeab4d2","Content-Type":"application/json"}},t=function(e,t){if(e.ok)return e.json();throw new Error(t)},n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var u=n.querySelector(".places__item").cloneNode(!0),a=u.querySelector(".card__image");a.src=e.link,a.alt=e.name,u.querySelector(".card__title").textContent=e.name,a.addEventListener("click",(function(){return o(e)}));var i=u.querySelector(".card__like-button"),l=u.querySelector(".counter__like"),s=u.querySelector(".card__delete-button"),d=(i.classList.contains("card__like-button"),i.classList.contains("card__like-button_is-active"),e.likes.length);return l.textContent=d,e.likes.some((function(e){return e._id===c}))?i.classList.add("card__like-button_is-active"):i.classList.add("card__like-button"),i.addEventListener("click",(function(){return r(i,l,e._id)})),e.owner._id===c?s.addEventListener("click",(function(){t(e._id,u)})):s.style.display="none",u}var o=function(n,r,o){(function(n,r){var o=r?"DELETE":"PUT";return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:o,headers:e.headers}).then((function(e){return t(e,"Ошибка по обновлениие лайка:")}))})(o,n.classList.contains("card__like-button_is-active")).then((function(e){n.classList.toggle("card__like-button_is-active"),r.textContent=e.likes.length})).catch((function(e){console.error("Ошибка по обработке лайка:",e)}))},c=function(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e,"Ошибка по удаление карточки:")}))})(n).then((function(){r.remove()})).catch((function(e){console.error("Ошибка по обработке удаление карточки:",e)}))};function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):s(t,n)},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t),n.value=""})),s(r,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".profile__image-block"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_new-avatar"),q=document.querySelectorAll(".popup__close"),E=document.querySelectorAll(".popup"),L=document.querySelector('form[name="edit-profile"]'),k=L.querySelector('input[name="name"]'),C=L.querySelector('input[name="description"]'),g=(document.querySelector(".profile__title"),document.querySelector(".profile__description"),document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_description"),document.querySelector('form[name="new-place"]')),A=document.querySelector('form[name="new-avatar"]'),w=document.querySelector(".popup_type_image"),x=w.querySelector(".popup__image"),U=w.querySelector(".popup__caption"),O=document.querySelector('input[name="place-name"]'),T=document.querySelector('input[name="link"]'),j=document.querySelector('input[name="link-avatar"]'),B=document.querySelector(".profile__image"),D=document.querySelector(".profile__title"),M=document.querySelector(".profile__description");function P(e){e.target.classList.contains("popup")&&a(e.target)}var N=function(e){x.src=e.link,x.alt=e.name,U.textContent=e.name,u(w)};function I(){var e=document.querySelector(".popup_is-opened");e&&(e.querySelector(".popup__button").textContent="Сохранить...")}function J(){var e=document.querySelector(".popup_is-opened");e&&(e.querySelector(".popup__button").textContent="Сохранить")}g.addEventListener("submit",(function(n){n.preventDefault();var u,i={name:O.value,link:T.value};I(),(u=i,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify(u)}).then((function(e){return t(e,"Ошибка при добавление новой карточки:")}))).then((function(e){var t=r(e,c,o,N,V);m.prepend(t),J(),a(n.target.closest(".popup")),n.target.reset(),p(z,H)})).catch((function(e){console.error("Ошибка по добавление карточки:",e)})).finally((function(){J()}))})),_.addEventListener("click",(function(){return u(h)})),y.addEventListener("click",(function(){return u(S)})),A.addEventListener("submit",(function(n){n.preventDefault();var r,o=j.value;I(),(r=o,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e,"Ошибка при обновлении аватара:")}))).then((function(){J(),a(n.target.closest(".popup")),n.target.reset(),p(z,H)})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){J()}))})),v.addEventListener("click",(function(){return u(b)})),L.addEventListener("submit",(function(n){n.preventDefault();var r,o={name:k.value,about:C.value};I(),(r=o,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify(r)}).then((function(e){return t(e,"Ошибка при сохранении данных:")}))).then((function(e){D.textContent=e.name,M.textContent=e.about,J(),a(L.closest(".popup"))})).catch((function(e){console.error("Ошибка при сохранении данные профиля:",e)})).finally((function(){J()}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")}))})),E.forEach((function(e){e.addEventListener("click",P)})),q.forEach((function(e){return e.addEventListener("click",(function(){var e=document.querySelector(".popup_is-opened");e&&a(e)}))}));var V=null;Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e,"Ошибка пo загрузка карточек с сервера:")})),fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e,"Ошибка по загрузке информации о пользователе:")}))]).then((function(e){var t,n,u=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];V=i._id,a.forEach((function(e){var t=r(e,c,o,N,V);m.append(t)})),D.textContent=i.name,M.textContent=i.about,B.src=i.avatar})).catch((function(e){console.log("Ошибка: ",e)}));var H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n),t.reportValidity()}(e,o,t),d(n,r,t)}))})),d(n,r,t)}(t,e)}))}(H);var z=document.querySelector('.popup__form[name="edit-profile"]')})();
//# sourceMappingURL=main.js.map