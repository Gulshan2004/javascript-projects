const btn = document.getElementById("btn");
const cityText = document.getElementById("city");
const tempText = document.getElementById("temp");
const cityInput = document.getElementById("cityInput");
const windText = document.getElementById("wind");

btn.addEventListener("click", async () => {
    try {
        const city = cityInput.value.trim(); // here trim() is used to remove extra space from the user input 

        if (city === "") {
            alert("please enter a city name");
            return;
        }
        // the UI part disable button + loading text
        btn.disabled = true;
        btn.innerText = "Loading...";

        cityText.innerText = city;
        tempText.innerText = "Loading...";
        windText.innerText = "";

        // STEP 1: Get Latitude & longitude as weather API does not accept names.
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        );

        // converting response to JS object 
        const geoData = await geoRes.json();

        console.log("Geo Data:", geoData);

        //if user types a random value then api returns {} as result doesnt exist for that input we throw error and code directly jumps to catch.
        if (!geoData.results) {
            throw new Error("City not found");
        }

        //Destructing Coordinates 
        const { latitude, longitude } = geoData.results[0];

        // STEP 2 : Weather API uses the corrdinates provided by the geocoding API i.e longitude and latitude
        const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        //converting weather response to JS object 
        const weatherData = await weatherRes.json();

        console.log("Weather Data:", weatherData);

        const weather = weatherData.current_weather; // This contains temperature and windspeed
        // shows the object value in DOM / screen .
        let emoji = "🌤️";
        if (weather.temperature < 10) emoji = "❄️";
        else if (weather.temperature > 30) emoji = "🔥";

        tempText.innerText = `${emoji} Temperature: ${weather.temperature}°C`;
        windText.innerText = `💨 Wind Speed: ${weather.windspeed} km/h`;

        cityInput.value = "";
    } catch (error) {
        tempText.innerText = "City not found or error Occured";
        windText.innerText = "";
        console.error(error);
    } finally {
        // 🔹 STEP 3 UI: re-enable button
        btn.disabled = false;
        btn.innerText = "Get Weather";
    }
});