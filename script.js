const body = document.body;

function setColor(name){

    body.style.backgroundColor = name;
}

function randColor(){
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

    const color = `rgb(${red},${green},${blue})`

    body.style.backgroundColor = color
}