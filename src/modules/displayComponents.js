import { getWeather, processResponse, weatherData } from "./getWeather.js";

function updateData() {
    const button = document.querySelector(".get-Weather");

    button.addEventListener("click", (event) => {
        const location = document.getElementById("location");
        const response = getWeather(location.value);
        processResponse(response);
    });
}

function loadDataDisplay() {
    updateData();
    console.log(weatherData);
}

export { loadDataDisplay };
