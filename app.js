const images = ['img/0.png', 'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png',
    'img/6.png', 'img/7.png', 'img/8.png', 'img/9.png'];

const hour1 = document.querySelector('.hour1');
const hour2 = document.querySelector('.hour2');
const min1 = document.querySelector('.min1');
const min2 = document.querySelector('.min2');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
let timer;
let prevHours;
let prevMin;
let prevSec;

function startClock() {
    let date = new Date();
    let hour = getHour();
    let min = getMin();
    let sec = getSec();
}
function getHour() {
    let hour = String(new Date().getHours());
    timer = setTimeout(getHour, 1000);
    if (hour !== prevHours) {
        let updatedHours = updateTime(hour, hour1, hour2);
        console.log('hour');
    }
    prevHours = hour;
}

function getMin() {
    let min = String(new Date().getMinutes());
    timer = setTimeout(getMin, 1000);
    if (min !== prevMin) {
        console.log('min');
        let updatedMin = updateTime(min, min1, min2);
    }
    prevMin = min;
}
function getSec() {
    let sec = String(new Date().getSeconds());
    timer = setTimeout(getSec, 1000);
    if (sec !== prevSec) {
        let updatedSec = updateTime(sec, sec1, sec2);
        console.log('sec');
    }
    prevSec = sec;
}

startClock();

function updateTime(time, elem1, elem2) {
    if (time < 10) {
        elem1.setAttribute('src', images[0]);
        elem2.setAttribute('src', images[time.charAt(0)]);
    }
    else {
        elem1.setAttribute('src', images[time.charAt(0)]);
        elem2.setAttribute('src', images[time.charAt(1)]);
    }

}
