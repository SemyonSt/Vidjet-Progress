import './style.css'


const circle = document.querySelector('.progress-ring__circle')
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = `${circumference} ${circumference}`

const setProgress = (percent) => {

    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset;
}

const input = document.querySelector('.input__value')

input.addEventListener('input', () => {
    const value = parseInt(input.value);
    setProgress(value)
    console.log(value)

})

