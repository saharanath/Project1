// $("#submitButton").on("click", function(){
    // event.preventDefault
    var city = "seattle";
    var apiKey = "eab6d01fa24f92ffa99be7e88ac10b4b";
    navigator.geolocation.getCurrentPosition(function(location) {

    var weatherQueryURL = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + location.coords.latitude + "&lon=" + location.coords.longitude + "&units=imperial&exclude=hourly&appid=" + apiKey);
    

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
        var extendedForecastTemp1 = response.daily[1].temp.max;
        console.log(extendedForecastTemp1)
        var extendedForecastWeatherDescription1 = response.daily[1].weather[0].description;
        // $('selector').text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
        console.log(extendedForecastWeatherDescription1)
        

        var extendedForecastTemp2 = response.daily[2].temp.max;
        var extendedForecastWeatherDescription2 = response.daily[2].weather[0].description;
        var extendedForecastTemp3 = response.daily[3].temp.max;
        var extendedForecastWeatherDescription3 = response.daily[3].weather[0].description;
        var extendedForecastTemp4 = response.daily[4].temp.max;
        var extendedForecastWeatherDescription4 = response.daily[4].weather[0].description;
        var extendedForecastTemp5 = response.daily[5].temp.max;
        var extendedForecastWeatherDescription5 = response.daily[5].weather[0].description;
        var extendedForecastTemp6 = response.daily[6].temp.max;
        var extendedForecastWeatherDescription6 = response.daily[6].weather[0].description;
        var extendedForecastTemp7 = response.daily[7].temp.max;
        var extendedForecastWeatherDescription7 = response.daily[7].weather[0].description;

        $(".extendedForecastTemp").append(extendedForecastTemp1)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription1)
        $(".extendedForecastTemp").append(extendedForecastTemp2)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription2)
        $(".extendedForecastTemp").append(extendedForecastTemp3)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription3)
        $(".extendedForecastTemp").append(extendedForecastTemp4)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription4)
        $(".extendedForecastTemp").append(extendedForecastTemp5)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription5)
        $(".extendedForecastTemp").append(extendedForecastTemp6)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription6)
        $(".extendedForecastTemp").append(extendedForecastTemp7)
        $(".extendedForecastDescription").append(extendedForecastWeatherDescription7)

    })

});
// })