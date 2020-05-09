// Hiking API Format
// https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=YOUR_KEY_HERE


// 

navigator.geolocation.getCurrentPosition(function (location) {
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);

    var userDistance = "";
    var maxDistance = "maxDistance=" + userDistance;
    var userLength = "";
    var minLength = "minLength=" + userLength;
    var userStars = ""; //0-4
    var minStars = "minStars=" + userStars;
    var apiKey = "key=200749192-819757ad274cc592a221c4c70b9c441e";

    var queryURL = "https://www.hikingproject.com/data/get-trails?" + "lat=" + location.coords.latitude + "&lon=" + location.coords.longitude + "&" + maxDistance + "&" + minLength + "&" + minStars + "&" + apiKey;

$("#submitButton").on("click", function(){
        event.preventDefault
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);

            $(".name").html("Trail Name :" + response. trails[0].name);
            $(".location").html(" Location:" + response.trails[0].location);
            $(".ascent").text("Ascent: " + response.trails[0].ascent + "ft");
            $(".descent").text("Descent: " + response.trails[0].descent + "ft");
            $(".length").text("Length: " + response.trails[0].length + "mi");
            $(".stars").text("Stars: " + response.trails[0].stars);
            parseDifficulty(response.trails[0].difficulty);
            $(".conditionStatus").text("Condition Status: " + response.trails[0].conditionStatus);
           

            console.log("Name: " + response.trails[0].name);
            console.log("Length: " + response.trails[0].length);
            console.log("Stars: " + response.trails[0].stars);
            console.log("Difficulty: " + response.trails[0].difficulty)


        });

    console.log(queryURL);
});

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
            
}})
// var lon= geolocation.getCurrentPosition();
// var lat= position.coords.latitude;


// AJAX call to Hiking API

// We store all of the retrieved data inside of an object called "response"


// Transfer content to HTML


// Logs