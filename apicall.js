window.onload = function () {
    // Retrieve users custom sentence from URL query string
    var inputText = "Auckland";
    // Make API call using custom sentence
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=c92f88262297a1e5dde4d3fe9c5d9088", false);
    xhr.send();
    // Save response body (response minus response header)
    var result = xhr.responseText;
    // var obj = JSON.parse(result);
    //var test = obj.coord;
    // Modify text of HTML paragraph to display text returned by the API
    //id of paragraph- HTML element adding the api to
    document.getElementById("result").innerHTML = result;
    //document.getElementById("test").innerHTML = test;
};
