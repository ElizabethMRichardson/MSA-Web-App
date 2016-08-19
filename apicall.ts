window.onload = function () {
    // Retrieve users custom sentence from URL query string
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("=");
    var inputText = vars[1];
    // Make API call using custom sentence
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "api.openweathermap.org/data/2.5/weather?q=" + inputText, false);
    //1st thing is the authorisation--- need to find this. 2nd part is key
    xhr.setRequestHeader("X-Mashape-Authorization", "CW6JnDKan9mshdwdYfgHqI2FGR2Op1xY4HNjsnciBi6eDYkLio");
    xhr.send();
    // Save response body (response minus response header)
    var result = xhr.responseText;
    // Modify text of HTML paragraph to display text returned by the API
    //id of paragraph- HTML element adding the api to
    document.getElementById("yoda-text").innerHTML = result;
};
