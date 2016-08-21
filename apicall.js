function apiConnection() {
    // Retrieve users custom sentence from URL query string
    //var inputValue = foo();
    alert("Button Pressed!");
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
    alert(test);
    // Modify text of HTML paragraph to display text returned by the API
    //id of paragraph- HTML element adding the api to
    document.getElementById("result").innerHTML = result;
    document.getElementById("test").innerHTML = test;
}
;
// function setCity(){
//var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
// var city = (<HTMLInputElement>document.getElementById('select1')).value;
// }
