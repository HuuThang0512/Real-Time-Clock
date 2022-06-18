const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
setInterval(() => {
    const date = new Date()
    const hourTime = date.getHours()
    const minTime = date.getMinutes()
    const secTime = date.getSeconds()
    hour.innerHTML = `${hourTime}`
    min.innerHTML = `${minTime}`
    sec.innerHTML = `${secTime}`
    if(hourTime < 10) {
        hour.innerHTML = `0${hourTime}`
    }
    if(minTime < 10) {
        min.innerHTML = `0${minTime}`
    }
    if(secTime < 10) {
        sec.innerHTML = `0${secTime}`
    }
}, 1000)