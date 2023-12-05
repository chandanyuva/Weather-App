async function getWeather(location) {
    const key = "9c9c5eb6675b4410b8284618230512";
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=yes`
    );
    return response;
}

async function processResponse(response) {
    const responseJSON = await response.then((data) => data.json());
    // console.log(
    //     responseJSON.location.name,
    //     " = ",
    //     responseJSON.current.condition.text
    // );
    return [responseJSON.location.name, responseJSON.current.condition.text];
}

export { getWeather, processResponse };
