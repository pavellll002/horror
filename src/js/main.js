'use strict'
const MORNING_MESSAGE = 'Кофе не забыл выпить?'
const DAY_MESSAGE = 'Чо не работаем?'
const EVENING_MESSAGE = 'Вечер...Скоро будут темные силы, берегись'
const NIGHT_MESSAGE = 'Здавор ,полуночник! Чего не спим?'
var hour = new Date().getHours()
var messages = [
    MORNING_MESSAGE,
    DAY_MESSAGE,
    EVENING_MESSAGE,
    NIGHT_MESSAGE,
]
var period = [
    //mornign
    6,
    //day
    12,
    //evenign
    17,
    //nignth
    22,
]
for(let i in messages) {
    i = parseInt(i)
    if((period[i+1] ? hour >= period[i] &&  period[i+1] > hour : true)) {
       alert(messages[i])
       break
    }
}

const ONE_DAY = 1000*3600*24,
DAY = 2,
MONTH = 10

let currYear = new Date().getFullYear(),
yearTheNextTheDeadDay = new Date(currYear, MONTH, DAY).getTime() > Date.now() ? 
currYear 
:
++currYear,
date = new Date(yearTheNextTheDeadDay, MONTH, DAY),
diffDay = Math.floor((date - new Date) / ONE_DAY)

if(diffDay) {
    document.getElementById('the-main-day').innerText = `There ${diffDay > 1 ? 'are' : 'is'} ${diffDay} days before the dead\'s day`
}

setInterval(() => {
    let time = new Date()
    document.getElementById('time').innerText = `Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}, 1000)