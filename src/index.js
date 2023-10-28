// ЗАДАЧА 1

import { onLoginFormSubmit, onPopulateForm } from "./js/handlers";
import { refs } from "./js/refs";

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними для зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

refs.loginForm.addEventListener("submit", onLoginFormSubmit);

document.addEventListener("DOMContentLoaded", onPopulateForm);


