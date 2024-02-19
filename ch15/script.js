const apiKey = 'YOUR API KEY'

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;

            const weatherHTML = `
                <h2>${name}</h2>
                <p><i class="${getWeatherIconClass(weather[0].description)}"></i> ${temperature}°C</p>
                <p>${description}</p>
            `;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching weather data';
        });
}

function getWeatherIconClass(description) {
    // Map weather descriptions to appropriate icon classes
    switch (description.toLowerCase()) {
        case 'clear sky':
            return 'fas fa-sun';
        case 'few clouds':
        case 'scattered clouds':
        case 'broken clouds':
            return 'fas fa-cloud';
        case 'shower rain':
        case 'rain':
            return 'fas fa-cloud-showers-heavy';
        // Add more cases as needed

        default:
            return 'fas fa-question'; // Default icon for unknown weather
    }
}
