const choosethis = document.getElementById('this');
const buttens = document.getElementById('buttens');
const this3 = document.getElementById('this3');
const finansir = document.getElementById('finansir');
var b = []
var a = 0
let random = 57

// var shown = false
// window.onkeydown = (e) => console.log(e)

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}



function people() {
    buttens.style.display = "none"
    a = getRandomInt(random)
    if (b.length >= random) {
        b = []
    }
    while (b.includes(a)){
        a = getRandomInt(random)    
    }
    b.push(a)
    
    choosethis.innerHTML = `<img src='image/charactor/image (${a}).jpg' class='showimages'>`
    this3.style.display = "block"
    console.log(b)
}

function reset(){
    buttens.style.display = "flex"
    this3.style.display = "none"
}