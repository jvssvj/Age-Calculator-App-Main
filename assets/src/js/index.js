let arrowBtn = document.getElementById('arrowbtn')
arrowBtn.addEventListener('click', function(){
    let day = parseFloat(document.getElementById('day').value)
    let month = parseFloat(document.getElementById('month').value)
    let year = parseFloat(document.getElementById('year').value)
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()

    let errorDay = 'error'
    let labelday = 'labelday'
    let dayInput = 'day'
    
    let errorMonth = 'error'
    let labelMonth = 'labelmonth'
    let monthInput = 'month'

    let errorYear = 'error'
    let labelYear = 'labelyear'
    let yearInput = 'year'

    function showError(errorDiv, IndexSpan, labelId, inputId) {
        document.getElementsByClassName(`${errorDiv}`)[IndexSpan].style.display = 'block'
        document.getElementById(`${labelId}`).style.color = 'hsl(0, 100%, 67%)'
        document.getElementById(`${inputId}`).style.borderColor = 'hsl(0, 100%, 67%)'
    }

    function hideError(errorDiv, IndexSpan, labelId, inputId) {
        document.getElementsByClassName(`${errorDiv}`)[IndexSpan].style.display = 'none'
        document.getElementById(`${labelId}`).style.color = ''
        document.getElementById(`${inputId}`).style.borderColor = ''
    }
///////////////////////////////////////////////////////////////////////////////////////////////
    if(isNaN(day) && isNaN(month) && isNaN(year)) {
        showError(errorDay, 0, labelday, dayInput)
        showError(errorMonth, 1, labelMonth, monthInput)
        showError(errorYear, 2, labelYear, yearInput)
    }

    if(isNaN(day)) {
        return showError(errorDay, 0, labelday, dayInput)
    } else {
        hideError(errorDay, 0, labelday, dayInput)
    }

    if (isNaN(month)) {
        return showError(errorMonth, 1, labelMonth, monthInput)
    } else {
        hideError(errorMonth, 1, labelMonth, monthInput)
    }

    if (isNaN(year)) {
        return showError(errorYear, 2, labelYear, yearInput)
    } else {
        hideError(errorYear, 2, labelYear, yearInput)
    }

    if (day >31 || day <=0) {
        document.getElementsByClassName('errorspan')[0].innerHTML = 'Must be a valid day'
        showError(errorDay, 0, labelday, dayInput)
        return
    }

    if (month > 12 || month <=0) {
        document.getElementsByClassName('errorspan')[1].innerHTML = 'Must be a valid month'
        showError(errorMonth, 1, labelMonth, monthInput)
        return
    }

    if (year > currentYear){
        document.getElementsByClassName('errorspan')[2].innerHTML = 'Must be in the past'
        showError(errorYear, 2, labelYear, yearInput)
        return
    }

/////////////////////////////////////////////////////////////////////////////////////////
    let dateOfBirth = new Date(year, month -1, day)
    let differenceInMilliseconds = currentDate - dateOfBirth
    let convertToDays = differenceInMilliseconds / (1000 * 60 * 60 * 24)

    let years = Math.floor(convertToDays / 365)
    let months = Math.floor((convertToDays % 365) / 30)
    let days = Math.floor((convertToDays % 365) % 30)


    let yearSpan = document.getElementById('resultyears')
    let monthSpan = document.getElementById('resultmonths')
    let daySpan= document.getElementById('resultdays')
   
    yearSpan.innerHTML = years
    monthSpan.innerHTML = months
    daySpan.innerHTML = days
})