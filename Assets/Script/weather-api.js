// $("#submitButton").on("click", function(){
    // event.preventDefault
    var city = "seattle";
    var latCoordinates = 47.61;
    var lonCoordinates = -122.33;
    var apiKey = "eab6d01fa24f92ffa99be7e88ac10b4b";
    var weatherQueryURL = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + latCoordinates + "&lon=" + lonCoordinates + "&units=imperial&exclude=hourly&appid=" + apiKey);
    

    $.ajax({url: weatherQueryURL, method: "GET"}).then(function(response){
        console.log(response)
        var currentTemp = response.current.temp;
        var currentIcon = response.current.weather[0].icon;
        console.log(currentIcon)
        var currentWindSpeed = response.current.wind_speed;
        // currentPercipitation 
        var currentHumidity = response.current.humidity;
        var iconURL = ("http://openweathermap.org/img/w/" + currentIcon + ".png");
        console.log(iconURL)

        $(".currentTemp").text("Temperature: " + currentTemp + " F");
        $(".currentIcon").attr("src", iconURL); 
        $(".currentWindSpeed").text("Wind Speed: " + currentWindSpeed + " MPH");
        $(".currentHumidity").text("Humidity: " + currentHumidity + "%");

        //*7 days
        var sevenDayForecastTemp1 = response.daily[1].temp.max;
        console.log(sevenDayForecastTemp1)
        var sevenDayForecastWeatherDescription1 = response.daily[1].weather[0].description;
        // $('selector').text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
        console.log(sevenDayForecastWeatherDescription1)
        

        var sevenDayForecastTemp1 = response.daily[2].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[2].weather[0].description;
        var sevenDayForecastTemp1 = response.daily[3].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[3].weather[0].description;
        var sevenDayForecastTemp1 = response.daily[4].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[4].weather[0].description;
        var sevenDayForecastTemp1 = response.daily[5].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[5].weather[0].description;
        var sevenDayForecastTemp1 = response.daily[6].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[6].weather[0].description;
        var sevenDayForecastTemp1 = response.daily[7].temp.max;
        var sevenDayForecastWeatherDescription1 = response.daily[7].weather[0].description;

        //*temp 7 day
        $(".tempFiveDay").each(function(i){
            $(this).text("Temp: " + response.daily[i].temp.day + " F");
        })

        //*weather description
        $(".tempFiveDay").each(function(i){
            $(this).text("Temp: " + response.daily[i].temp.day + " F");
        })


    })
// })