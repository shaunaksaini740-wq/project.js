const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const api_key = "a7c40994cc45ea7c552e2f051690b59e";

//QUERYSELECTOR IS THE FUNCTION THAT IS USED TO THE FIND THE FIRST SAME ELEMENT FROM HTML FILE. 

const inputValue = document.querySelector(".input");
const windspee = document.querySelector(".windspeed");
const desc = document.querySelector(".des");
const tempr = document.querySelector(".tempe");
const lati = document.querySelector(".latti");
const longi = document.querySelector(".long");
const ground = document.querySelector(".gro_lev");
const pressu = document.querySelector(".press");
const sea = document.querySelector(".sea_lev");
const countr = document.querySelector(".count");
const vis = document.querySelector(".visi");
const degr = document.querySelector(".degre");


function input(e) {
    e.preventDefault();  // IT PREVENT THE OUTPUT SHOWING ON THE SITE FOR SOMETIME
    const word = document.querySelector("#inputvalue").value;
    console.log(word);

    fetch(                                                                           // FETCH FUNCTION IS USED THE FETCH THE API SIGNALS AND INFORMATION THE COMING SITE
        `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=${api_key}`
    )
        /*
        .then()-------->

        * Fetching data from server
        * Reading a file
        * Waiting for a timer
        */

        .then((res) => {                                         
            return res.json()                    // THIS LINE THE RETURE THE CODE IN JSON FORMATE
        }).then((data) => {
            tempr.innerHTML = "TEMPERATURE: " + Math.floor((data.main.temp)-273) + "  C";      // THIS INNERHTML MAKES THE PATH IN HTML CODE THROUGH THE SORED VARIABLE
            desc.innerHTML = "DESCRIPTION: " + data.weather[0].description;
            lati.innerHTML = "LATITUDE: " + data.coord.lat;
            longi.innerHTML = "LONGITUDE: " + data.coord.lon;
            windspee.innerHTML = "WINDSPEED: " + data.wind.speed + "  Km/h";
            pressu.innerHTML = "PRESSURE: " + data.main.pressure + "  Atm";
            ground.innerHTML = "GROUND LEVEL: " + data.main.grnd_level + "  hPa/mb";
            sea.innerHTML = "SEA LEVEL: " + data.main.sea_level + "  hPa/mb";
            countr.innerHTML = "COUNTRY: " + data.sys.country;
            vis.innerHTML = "VISIBILITY: " + data.visibility + "  Sm";
            degr.innerHTML = "WIND DEGREE: " + data.wind.deg;
        });
}

inputValue.addEventListener("submit", input);




