$(document).ready(function () {
    
    // Get Location
    weather()
    function weather() {
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=43.6532&lon=-79.3832", function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
    }
});