const clockContainer = document.querySelector(".js-clock"),
 clcokTitle = clockContainer.querySelector("h1"),
 dateContainer = document.querySelector(".js-date"),
 dateTitle = dateContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const month = date.getMonth() +1;
    const year = date.getFullYear();
    const day = date.getDate();
    clcokTitle.innerHTML = `${hours < 10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    dateTitle.innerHTML = `${year}-${month <10?`0${month}`:month}-${day<10?`0${day}`:day}`;
}

function init(){
    setInterval(getTime,500);
}

init();