async function getWeather(location = "india") {
    const key = "9c9c5eb6675b4410b8284618230512";

    if (!location) {
        location = "india";
    }
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`
    );
    const data = await response.json();
    return data;
}

export { getWeather };
