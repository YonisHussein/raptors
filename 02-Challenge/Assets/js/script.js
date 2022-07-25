var buttonEl = document.querySelector('.button');
var humidityEl = document.querySelector('.humidityEl');
var windSpeedEl = document.querySelector('windSpeed');
var inputValueEl = document.querySelector('.inputvalue');
var cityEl = document.querySelector('.city');
var timeEl = document.querySelector('.time');
var tempEl = document.querySelector('.temp');
var descEl = document.querySelector('desc');

buttonEl.addEventListener('click', function (){

    fetch('https://api.openweathermap.org/data/2.5/forecast>q=' + inputValueEl.value + '&cnt=168&appid=ef67e5009d4692986dc5a35ad88f7290')
    .then(response => response.json())
})