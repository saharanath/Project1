$("#submitButton").on("click", function(){
    event.preventDefault
    var city = "seattle";
    var latCoordinates = 47.61;
    var lonCoordinates = -122.33;
    var apiKey = "eab6d01fa24f92ffa99be7e88ac10b4b";
    var weatherQueryURL = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latCoordinates + "&lon=" + lonCoordinates + "&units=imperial&exclude=hourly&appid=" + apiKey);
    

    $.ajax({url: weatherQueryURL, method: "GET"}).then(function(response){
        console.log(response);
        var currentTemp = response.current.temp;
        console.log(currentTemp);
        var currentIcon = response.current.weather[0].icon;
        console.log(currentIcon);
        var currentWindSpeed = response.current.wind_speed;
        console.log(currentWindSpeed)
        // currentPercipitation 
        var currentHumidity = response.current.humidity;
        console.log(currentHumidity);

        //*7 days
        var sevenDayForecastTemp = response.daily[1].temp.max;
        console.log(sevenDayForecastTemp)
        var sevenDayForecastWeatherDescription = response.daily[1].weather[0].description;
        // $('selector').text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
        console.log(sevenDayForecastWeatherDescription)



    })
})