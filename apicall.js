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
    // Modify text of HTML paragraph to display text returned by the API
    //id of paragraph- HTML element adding the api to
    fillHtml(test);
    //document.getElementById("result").innerHTML = result;
    document.getElementById("test").innerHTML = test;
}
;
function fillHtml(temperature) {
    document.getElementById("temp-heading").innerHTML = "The temperature is";
    document.getElementById("temperature").innerHTML = temperature;
    if (temperature <= 10) {
        $('html').css('background', 'url(http://hdimagesnew.com/wp-content/uploads/2015/11/Snow-Wallpapers-9.jpg)');
        playSound('song1.mp3');
    }
    else if (temperature > 10 && temperature < 20) {
        $('html').css('background', 'url(http://api.ning.com/files/4zDRwQPj*wvbJIcxs69xMfKLdYDzvlY8yQ4-uOAoOwMkwzywLmeausNISnLHX02P8X8uO4kZYKnObGUWG**dTOW6RoqNBHo-/DSC02494.JPG)');
    }
    else if (temperature >= 20 && temperature < 30) {
        $('html').css('background', 'url(http://feelgrafix.com/data_images/out/15/899365-sunny-day-wallpaper.jpg)');
    }
    else {
        $('html').css('background', 'url(http://webneel.com/wallpaper/sites/default/files/images/08-2013/10-star-fish-sea-beach-sand-wallpaper.jpg)');
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
