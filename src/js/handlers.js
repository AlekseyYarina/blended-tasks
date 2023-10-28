import { STORAGE_KEY, USER_DATA } from "./constants";
import { refs } from "./refs";

// ---------task-01------------
export function onLoginFormSubmit(evt){
evt.preventDefault()
// console.dir(evt.target);
const { email, password, button } = evt.target.elements;

if(button.textContent === "logout"){
    button.textContent = "login";
email.disabled = false;
password.disabled = false;
localStorage.removeItem(STORAGE_KEY);
evt.target.reset()
return
};


if (email.value !== USER_DATA.email || password.value !== USER_DATA.password) { 
    return alert("Невірно ввели данні!")
}
localStorage.setItem(STORAGE_KEY, JSON.stringify(USER_DATA));

button.textContent = "logout";
email.disabled = true;
password.disabled = true;

// console.log("click btn");



}

export function onPopulateForm(evt){

const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(!saveData){
    return
}
const { email, password, button } = refs.loginForm.elements;
button.textContent = "logout";
email.disabled = true;
password.disabled = true;
email.value = saveData.email;
password.value = saveData.password

console.log(saveData);
}