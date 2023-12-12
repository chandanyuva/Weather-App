import { getWeather } from "./getWeather.js";

function loadDataDisplay() {
    const button = document.querySelector(".get-Weather");
    const input = document.getElementById("location");

    input.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            const location = document.getElementById("location");
            const wdata = getWeather(location.value);
            wdata.then((data) => {
                console.log(data);
                if (data.error) {
                    alert(`${data.error.message}`);
                }
                const location = document.querySelector(".location");
                location.textContent = data.location.name;

                const condition = document.querySelector(".condition");
                condition.textContent = data.current.condition.text;

                const tempareture = document.querySelector(".tempareture");
                tempareture.textContent = `${data.current.temp_c} °C`;

                const windSpeed = document.querySelector(".wind-speed");
                windSpeed.textContent = data.current.wind_kph;
            });
        }
    });

    button.addEventListener("click", (event) => {
        const location = document.getElementById("location");
        const wdata = getWeather(location.value);
        wdata.then((data) => {
            console.log(data);
            if (data.error) {
                alert(`${data.error.message}`);
            }
            const location = document.querySelector(".location");
            location.textContent = data.location.name;

            const condition = document.querySelector(".condition");
            condition.textContent = data.current.condition.text;

            const tempareture = document.querySelector(".tempareture");
            tempareture.textContent = `${data.current.feelslike_c} °C`;

            const windSpeed = document.querySelector(".wind-speed");
            windSpeed.textContent = `${data.current.wind_kph} km/h`;
        });
    });
}

export { loadDataDisplay };
