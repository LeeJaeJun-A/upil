const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
listBtn = toDoForm.querySelector(".toDoBtn"),
listIcon = toDoForm.querySelector(".fa-lg");

const TODOS_LS = 'toDos';
let toDos = [];
let listNum = 0;

function finishToDo(event){
    const btn = event.target;
    const div = btn.parentNode;
    const li = div.parentNode;
    li.classList.toggle('completed');
}

function deleteToDo(event){
    const btn = event.target;
    const div = btn.parentNode;
    const li = div.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const finBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = listNum++;
    const div = document.createElement("div");
    finBtn.innerHTML = "✔";
    finBtn.addEventListener("click",finishToDo);
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(finBtn);
    div.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleToDo(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos =JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function hideToDo() {
    toDoInput.classList.toggle("hidden");
    toDoList.classList.toggle("hidden");
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit",handleToDo);
    listBtn.addEventListener("click", hideToDo);
    listIcon.addEventListener("click",hideToDo);
}

init();