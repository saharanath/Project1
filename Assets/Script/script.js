// 

navigator.geolocation.getCurrentPosition(function (location) {

    var maxDistance;
    var minLength;
    var minStars;
    var apiKey = "key=200749192-819757ad274cc592a221c4c70b9c441e";
    var i = 0;
    var trails;
    $("button").on("click", getTrails);

    function getTrails(event) {
        maxDistance = $(".maxDistance").val();
        minLength = $(".minLength").val();
console.log(location.coords.longitude);
        console.log($(".minStar").val());
        console.log(maxDistance);
        console.log(minLength);
        var queryURL = "https://www.hikingproject.com/data/get-trails?" +
            "lat=" + location.coords.latitude + "&lon=" + location.coords.longitude +
            "&maxDistance=" + maxDistance + "&minLength=" + minLength + "&minStars=" + minStars + "&" + apiKey;

        event.preventDefault();
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                trails = response.trails
                console.log(queryURL)
                $(".name").html("Trail Name: " + response.trails[i].name);
                $(".location").html("Location: " + response.trails[i].location);
                $(".ascent").text("Ascent: " + response.trails[i].ascent + "ft");
                $(".descent").text("Descent: " + response.trails[i].descent + "ft");
                $(".length").text("Length: " + response.trails[i].length + "mi");
                $(".stars").text("Stars: " + response.trails[i].stars);
                parseDifficulty(response.trails[i].difficulty);

                i++;
                if (i === trails.length) {
                    i = 0
                }

                fetchWeather(response.trails[i].location);
            });
    }

    function parseDifficulty(difficulty) {
        var difficultyLevel;
        if (difficulty === "green") {
            difficultyLevel = "Easy";
        }
        if (difficulty === "blue") {
            difficultyLevel = "Intermediate";
        }
        if (difficulty === "black") {
            difficultyLevel = "Hard";
        }
        $(".difficulty").text("Difficulty: " + difficultyLevel);

    }
})

function fetchWeather(city) {
    var city;
    var apiKey = "eab6d01fa24f92ffa99be7e88ac10b4b";

    var cityAPIUrl = ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey);


    // var weatherQueryURL = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + location.coords.latitude + "&lon=" + location.coords.longitude + "&units=imperial&exclude=hourly&appid=" + apiKey);

    $.ajax({
        url: cityAPIUrl,
        method: "GET"
    }).then(function (response) {
        var currentTemp = response.main.temp;
        var currentIcon = response.weather[0].icon;
        var currentWindSpeed = response.wind.speed;
        // currentPercipitation 
        var currentHumidity = response.main.humidity;
        var iconURL = ("http://openweathermap.org/img/w/" + currentIcon + ".png");


        $(".currentTemp").text("Temperature: " + currentTemp + " F");
        $(".currentIcon").attr("src", iconURL);
        $(".currentWindSpeed").text("Wind Speed: " + currentWindSpeed + " MPH");
        $(".currentHumidity").text("Humidity: " + currentHumidity + "%");


    })

}
// });
// // var lon= geolocation.getCurrentPosition();
// // var lat= position.coords.latitude;

// //*7 days
// var extendedForecastTemp1 = response.daily[1].temp.max;
// console.log(extendedForecastTemp1)
// var extendedForecastWeatherDescription1 = response.daily[1].weather[0].description;
// // $('selector').text(str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
// console.log(extendedForecastWeatherDescription1)

// var extendedForecastTemp2 = response.daily[2].temp.max;
// var extendedForecastWeatherDescription2 = response.daily[2].weather[0].description;
// var extendedForecastTemp3 = response.daily[3].temp.max;
// var extendedForecastWeatherDescription3 = response.daily[3].weather[0].description;
// var extendedForecastTemp4 = response.daily[4].temp.max;
// var extendedForecastWeatherDescription4 = response.daily[4].weather[0].description;
// var extendedForecastTemp5 = response.daily[5].temp.max;
// var extendedForecastWeatherDescription5 = response.daily[5].weather[0].description;
// var extendedForecastTemp6 = response.daily[6].temp.max;
// var extendedForecastWeatherDescription6 = response.daily[6].weather[0].description;
// var extendedForecastTemp7 = response.daily[7].temp.max;
// var extendedForecastWeatherDescription7 = response.daily[7].weather[0].description;

// $(".extendedForecastTemp").append(extendedForecastTemp1)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription1)
// $(".extendedForecastTemp").append(extendedForecastTemp2)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription2)
// $(".extendedForecastTemp").append(extendedForecastTemp3)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription3)
// $(".extendedForecastTemp").append(extendedForecastTemp4)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription4)
// $(".extendedForecastTemp").append(extendedForecastTemp5)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription5)
// $(".extendedForecastTemp").append(extendedForecastTemp6)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription6)
// $(".extendedForecastTemp").append(extendedForecastTemp7)
// $(".extendedForecastDescription").append(extendedForecastWeatherDescription7)