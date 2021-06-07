const body = document.querySelector("body");

function paintImage(imgNumber){
    const image = new Image();
    image.src =`images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}
function dayNumber(){
    const date = new Date();
    const Hour = date.getHours();
    let number = date.getDay() + 1;
    if(Hour>=22 || Hour<=6){
        number += 7;
    }
    return number;
}
function init(){
    const todayNumber = dayNumber();
    paintImage(todayNumber);
}

init();