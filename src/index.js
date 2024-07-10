let arrowBtn = document.querySelector('#cl__arrow--btn')
let day = document.querySelector('#input--day')
let month = document.querySelector('#input--month')
let year = document.querySelector('#input--year')
let errorColor = 'hsl(0, 100%, 67%)'

function error(errorId, textContent, labelId, colorLabel, inputId, colorBorderInput) {
    document.getElementById(errorId).textContent = textContent
    document.getElementById(labelId).style.color = colorLabel
    document.getElementById(inputId).style.borderColor = colorBorderInput
}

function errorInput(errorId, labelId, inputId) {
    if(document.getElementById(inputId).value === '') {
        error(errorId, 'This field is required', labelId, errorColor, inputId, errorColor)
    } else {
        error(errorId, '', labelId, '', inputId, '')
    }
}

day.addEventListener('input', () => {
    errorInput('error--day', 'label--day', 'input--day')
})
month.addEventListener('input', () => {
    errorInput('error--month', 'label--month', 'input--month')
})
year.addEventListener('input', () => {
    errorInput('error--year', 'label--year', 'input--year')
})
 
arrowBtn.addEventListener('click', function(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()

    if(day.value == '' && month.value == '' && year.value == '') {
        error('error--day', 'This field is required', 'label--day', errorColor, 'input--day', errorColor)
        error('error--month', 'This field is required', 'label--month', errorColor, 'input--month', errorColor)
        error('error--year', 'This field is required', 'label--year', errorColor, 'input--year', errorColor)
        return
    } 
    else if (day.value == '') {
        error('error--day', 'This field is required', 'label--day', errorColor, 'input--day', errorColor)
        return
    } 
    else if (month.value == '') {
        error('error--month', 'This field is required', 'label--month', errorColor, 'input--month', errorColor)
        return
    } 
    else if (year.value == '') {
        error('error--year', 'This field is required', 'label--year', errorColor, 'input--year', errorColor)
        return
    } 
    else {
        error('error--day', '', 'label--day', '', 'input--day', '')
        error('error--month', '', 'label--month', '', 'input--month', '')
        error('error--year', '', 'label--year', '', 'input--year', '')
    }


    if (day.value > 31 || day.value <= 0) {
        error('error--day', 'Must be a valid day', 'label--day', errorColor, 'input--day', errorColor)
        return
    } else {
        error('error--day', '', 'label--day', '', 'input--day', '')
    }

    if (month.value > 12 || month.value <= 0) {
        error('error--month', 'Must be a valid month', 'label--month', errorColor, 'input--month', errorColor)
        return
    } else {
        error('error--month', '', 'label--month', '', 'input--month', '')
    }

    if (year.value > currentYear) {
        error('error--year', 'Must be a valid year', 'label--year', errorColor, 'input--year', errorColor)
        return
    } else {
        error('error--year', '', 'label--year', '', 'input--year', '')
    }


    let dateOfBirth = new Date(year.value, month.value, day.value)
    let differenceInMilliseconds = currentDate - dateOfBirth
    let convertToDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)
    let years = Math.floor(convertToDays / 365)
    let months = Math.floor((convertToDays % 365) / 30)
    let days = Math.floor((convertToDays % 365) % 30)

    document.querySelector('#result--years').innerText = years
    document.querySelector('#result--months').innerText = months
    document.querySelector('#result--days').innerText = days
})