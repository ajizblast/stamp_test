const fetch = require('node-fetch');

async function getWeatherForecast() {
    const apiKey = 'f490f654becec50135f246b63f3c55d8';
    const city = 'Jakarta';
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod !== '200') {
            console.log('Error:', data.message);
            return;
        }

        console.log('Weather Forecast:');
        const forecasts = data.list;
        const dailyForecasts = {};

        forecasts.forEach(forecast => {
            const dateTime = new Date(forecast.dt * 1000); // Convert UNIX timestamp to milliseconds
            const date = formatDate(dateTime);
            const temperature = forecast.main.temp;
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = temperature;
            }
        });

        for (const date in dailyForecasts) {
            console.log(`${date}: ${dailyForecasts[date]}°C`);
        }

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const formattedDate = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;
    return formattedDate;
}

getWeatherForecast();
