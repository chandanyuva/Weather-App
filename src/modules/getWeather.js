let weatherData;

async function getWeather(location = "india") {
    const key = "9c9c5eb6675b4410b8284618230512";
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`
    );
    return response;
}

async function processResponse(response) {
    const responseJSON = await response.then((data) => data.json());
    weatherData = responseJSON;
    console.log(weatherData);
    return responseJSON;
}

export { getWeather, processResponse,weatherData };
