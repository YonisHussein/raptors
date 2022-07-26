var buttonEl = document.querySelector('.button');
var humidityEl = document.querySelector('.humidity');
var windSpeedEl = document.querySelector('.windSpeed');
var inputValueEl = document.querySelector('.inputvalue');
var cityEl = document.querySelector('.city');
var timeEl = document.querySelector('.time');
var tempEl = document.querySelector('.temp');
var descEl = document.querySelector('.desc');

buttonEl.addEventListener('click', function (){

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValueEl.value + '&cnt=168&appid=ef67e5009d4692986dc5a35ad88f7290')
    .then(response => response.json())
    .then(data => {
        var cityElValue = data['city']['name']
        var timeElValue = data['list'][0]['dt_txt']
        var tempElValue = data['list'][0]['main']['temp']
        var desElValue = data['list'][0]['weather'][0]['description']
        var humidityElValue = data['list'][0]['main']['humidity']
        var windSpeedElValue = data['list'][0]['wind']['speed']

        cityEl.innerHTML = cityElValue
        timeEl.innerHTML = 'Time: ' + tempElValue
        tempEl.innerHTML = 'Temperature: ' + tempElValue
        descEl.innerHTML = desElValue
        humidityEl.innerHTML = 'Humidity: ' + humidityElValue + '%'
        windSpeedEl.innerHTML = 'Wind Speed: ' + windSpeedEl + 'MPH'
    })
    .catch(err => alert ('Please enter a correct city.'))
})