const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings"),
refresh = document.querySelector(".name-refresh"),
refreshBtn = document.querySelector(".fa-sync-alt");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
        greeting.classList.remove("hidden");
    }
}

function refreshName(){
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CN);
    greeting.classList.add("hidden");
    loadName();
}

function init() {
    loadName();    
    refresh.addEventListener("click",refreshName);
    refreshBtn.addEventListener("click",refreshName);
}

init();