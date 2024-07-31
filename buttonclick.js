const choosethis = document.getElementById('this');
const buttens = document.getElementById('buttens');
const this3 = document.getElementById('this3');
const finansir = document.getElementById('finansir');


function getRandomInt() {
    return Math.floor(Math.random() * 30) + 1;
}

function sea(){
    buttens.style.display = "none"
    a = getRandomInt()
    choosethis.innerText = "바다 문제 " + String(a) + "번 주세요!"
    this3.style.display = "block"
}

function culturehome() {
    buttens.style.display = "none"
    a = getRandomInt()
    choosethis.innerText = "문화의집 문제 " + String(a) + "번 주세요!"
    this3.style.display = "block"
}

function people() {
    buttens.style.display = "none"
    a = getRandomInt()
    choosethis.innerText = "인물 캐릭터 문제 " + String(a) + "번 주세요!"
    this3.style.display = "block"
}

function reset(){
    buttens.style.display = "flex"
    this3.style.display = "none"
}