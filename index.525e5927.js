!function(){var e={email:"user@mail.com",password:"123"},t="user-data",o={loginForm:document.querySelector("#login-form")};o.loginForm.addEventListener("submit",(function(o){o.preventDefault();var a=o.target.elements,l=a.email,n=a.password,r=a.button;return"logout"===r.textContent?(r.textContent="login",l.disabled=!1,n.disabled=!1,localStorage.removeItem(t),void o.target.reset()):l.value!==e.email||n.value!==e.password?alert("Невірно ввели данні!"):(localStorage.setItem(t,JSON.stringify(e)),r.textContent="logout",l.disabled=!0,void(n.disabled=!0))})),document.addEventListener("DOMContentLoaded",(function(e){var a=JSON.parse(localStorage.getItem(t));if(a){var l=o.loginForm.elements,n=l.email,r=l.password;l.button.textContent="logout",n.disabled=!0,r.disabled=!0,n.value=a.email,r.value=a.password,console.log(a)}}))}();
//# sourceMappingURL=index.525e5927.js.map