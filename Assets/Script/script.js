// 
var maxDistance;
var minLength;
var minStars;
var apiKey = "key=200749192-819757ad274cc592a221c4c70b9c441e";
var i = 0;
var trails;
var setLocation;

navigator.geolocation.getCurrentPosition(function (currentLocation) {
        setLocation = currentLocation;
    },
    function () {
        setLocation = {
            coords: {
                latitude: 47.6062,
                longitude: -122.3321
            }
        }
    })


function getTrails(i) {
    maxDistance = $(".maxDistance").val();
    minLength = $(".minLength").val();
    minStars = $("minStar").children("option:selected").val();
    
    var queryURL = "https://www.hikingproject.com/data/get-trails?" +
        "lat=" + setLocation.coords.latitude + "&lon=" + setLocation.coords.longitude +
        "&maxDistance=" + maxDistance + "&minLength=" + minLength + "&minStars=" + minStars + "&" + apiKey;

   
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            trails = response.trails
            
            $(".name").html("Trail Name: " + response.trails[i].name);
            $(".location").html("Location: " + response.trails[i].location);
            $(".ascent").text("Ascent: " + response.trails[i].ascent + "ft");
            $(".descent").text("Descent: " + response.trails[i].descent + "ft");
            $(".length").text("Length: " + response.trails[i].length + "mi");
            $(".stars").text("Stars: " + response.trails[i].stars);
            parseDifficulty(response.trails[i].difficulty);


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


$("#submitButton").on("click", function (params) {
    params.preventDefault()
    var startIndex = 0;
    getTrails(startIndex);
})
$(".nextButton").on("click", function (params) {
    params.preventDefault();
    var increaseIndex = i++
    if (i >= trails.length) {
        i = 0
    }
    getTrails(increaseIndex);
})


function fetchWeather(city) {
    var city;
    var apiKey = "eab6d01fa24f92ffa99be7e88ac10b4b";

    var cityAPIUrl = ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey);


    
    $.ajax({
        url: cityAPIUrl,
        method: "GET"
    }).then(function (response) {
        var currentTemp = response.main.temp;
        var currentIcon = response.weather[0].icon;
        var currentWindSpeed = response.wind.speed;
        // currentPercipitation 
        var currentHumidity = response.main.humidity;
        var iconURL = ("https://openweathermap.org/img/w/" + currentIcon + ".png");


        $(".currentTemp").text("Temperature: " + currentTemp + " F");
        $(".currentIcon").attr("src", iconURL);
        $(".currentWindSpeed").text("Wind Speed: " + currentWindSpeed + " MPH");
        $(".currentHumidity").text("Humidity: " + currentHumidity + "%");


    })

}
