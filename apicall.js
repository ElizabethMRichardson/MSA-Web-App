/// <reference path="typings/index.d.ts" />
function apiConnection() {
    // Retrieve users custom sentence from URL query string
    //var inputValue = foo();
    var inputValue = document.getElementById('selectCity').value;
    // Make API call using custom sentence
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&units=metric&appid=c92f88262297a1e5dde4d3fe9c5d9088", false);
    xhr.send();
    // Save response body (response minus response header)
    var result = xhr.responseText;
    var obj = JSON.parse(result);
    var city = obj.name;
    var test = obj.main.temp;
    var id = obj.weather[0].id;
    var description = obj.weather[0].main;
    // Modify text of HTML paragraph to display text returned by the API
    //id of paragraph- HTML element adding the api to
    fillHtml(test, id, description);
    //document.getElementById("result").innerHTML = result;
    document.getElementById("test").innerHTML = test;
}
;
function fillHtml(temperature, weather, desc) {
    document.getElementById("temp-heading").innerHTML = "The temperature is";
    document.getElementById("temperature").innerHTML = temperature;
    document.getElementById("test-id").innerHTML = desc;
    if (weather == 961 || weather == 901 || weather == 960 || (weather >= 200 && weather < 300)) {
        $('html').css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg)');
        $('html').css('background-size', 'cover');
    }
    else if (weather >= 300 && weather < 400) {
        $('html').css('background', 'url(https://static.pexels.com/photos/68357/pexels-photo-68357.jpeg)');
        $('html').css('background-size', 'cover');
    }
    else if ((weather >= 500 && weather < 600) || weather == 906) {
        $('html').css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/6/64/Guy_with_an_umbrella_battling_rain_and_snow_on_a_bridge.jpg)');
        $('html').css('background-size', 'cover');
    }
    else if ((weather >= 600 && weather < 699) || weather == 903) {
        $('html').css('background', 'url(https://static.pexels.com/photos/5313/cold-snow-nature-forest.jpg)');
        $('html').css('background-size', 'cover');
    }
    else if ((weather >= 700 && weather < 799)) {
        $('html').css('background', 'url(https://static.pexels.com/photos/3176/mountains-forest-fog-mist.jpeg)');
        $('html').css('background-size', 'cover');
    }
    else if (weather == 800 || weather == 904) {
        $('html').css('background', 'url(http://s3.freefoto.com/images/9909/05/9909_05_6082_web.jpg) no-repeat center center fixed');
        $('html').css('background-size', 'cover');
    }
    else if ((weather >= 801 && weather <= 804)) {
        $('html').css('background', 'url(https://static.pexels.com/photos/1818/sky-clouds-cloudy-forest.jpg)');
    }
    else if ((weather >= 952 && weather < 960) || weather == 962 || weather == 905 || weather == 900 || weather == 902) {
        $('html').css('background', 'url(http://www.publicdomainpictures.net/pictures/10000/velka/87-12681332789SQ8.jpg)');
        $('html').css('background-size', 'cover');
    }
    else {
        $('html').css('background', 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Flag_of_Afghanistan_(1880%E2%80%931901).svg/2000px-Flag_of_Afghanistan_(1880%E2%80%931901).svg.png)');
        $('html').css('background-size', 'cover');
    }
}
function playSound(url) {
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    audio.onended = function () {
        audio.remove(); //Remove when played.
    };
    document.body.appendChild(audio);
}
