const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
function clock(){
    var time = new Date();

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
 
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second;
    }
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    seconds.innerHTML = second;
}
setInterval("clock()",1000);

const timeHours = document.querySelector('.time_Hours')
const timeMinutes = document.querySelector('.time_Minutes')
const timeSeconds = document.querySelector('.time_Seconds')
const timeTicks = document.querySelector('.time_Ticks')

const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')

let watchInterval, watchTimeout;

function addLeadingZero(num) {
    return num < 10 ? "0" + num : num;
}

function timeLine(){
    let timehour = 0
    let timeminute = 0
    let timesecond = 0
    let timetick = 0

    setTimeout(function start(){
        timetick++;
        if (timetick === 100) {
            timetick = 0;
            timesecond++;
            if (timesecond == 60) {
                timesecond = 0;
                timeminute++;
                if (timesecond == 60) {
                    timeminute = 0;
                    timehour++;
                }
            }
        }
        timeHours.innerHTML = addLeadingZero(timehour)
        timeMinutes.innerHTML = addLeadingZero(timeminute)
        timeSeconds.innerHTML = addLeadingZero(timesecond)
        timeTicks.innerHTML = addLeadingZero(timetick)
        watchTimeout = setTimeout(start, 10);
    },10);
    start();
}

btnStart.onclick = function(){
    btnStart.classList.add("down")
    setTimeout(function(){
       btnStart.classList.remove("down")
    },500)
    timeLine()
}

btnStop.onclick = function(){
    btnStop.classList.add("down")
    setTimeout(function(){
        btnStop.classList.remove("down")
    },500)
    clearTimeout(watchTimeout)
}

const btnTimeline = document.querySelector('.timeline')
const screen1 = document.querySelector('.screen_1')
const screen2 = document.querySelector('.screen_2')
let isScreen1Visible  = true;

btnTimeline.onclick = function(){
    if(isScreen1Visible){
        screen2.classList.remove("delete")
        screen1.classList.add("delete")
    }
    else{
        screen1.classList.remove("delete")
        screen2.classList.add("delete")
    }
    isScreen1Visible  = !isScreen1Visible 
    btnTimeline.classList.add("down")
    setTimeout(function(){
        btnTimeline.classList.remove("down")  
    },500)
}
