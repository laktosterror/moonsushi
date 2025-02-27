const wmoCodes = {
    // No precipitation at the station at the time of observation
    0: "No clouds",
    1: "Less clouds",
    2: "Same sky",
    3: "More clouds",
    4: "Smoke around",
    5: "Foggy air",
    6: "Dust around",
    7: "Windy dust",
    8: "Dust spinning",
    9: "Big dust",
    10: "Little fog",
    11: "Fog patches",
    12: "Lots fog",
    13: "See lightning",
    14: "Rain far",
    15: "Rain nearby",
    16: "Rain close",
    17: "Storm no rain",
    18: "Windy rain",
    19: "Funnel clouds",

    // Precipitation, fog, ice fog or thunderstorm at the station during the preceding hour but not at the time of observation
    20: "Light drizzle",
    21: "Light rain",
    22: "Light snow",
    23: "Rain snow",
    24: "Icy drizzle",
    25: "Rain showers",
    26: "Snow showers",
    27: "Hail showers",
    28: "Thick fog",
    29: "Big storm",

    // Duststorm, sandstorm, drifting or blowing snow
    30: "Less dust",
    31: "Same dust",
    32: "More dust",
    33: "Less big dust",
    34: "Same big dust",
    35: "More big dust",
    36: "Low snow",
    37: "Lots snow",
    38: "High snow",
    39: "Heavy snow",

    // Fog or ice fog at the time of observation
    40: "Fog far",
    41: "Fog spots",
    42: "Thin fog",
    43: "Thick fog",
    44: "Same fog",
    45: "Thick fog",
    46: "More fog",
    47: "Thick fog",
    48: "Icy fog",
    49: "Thick icy fog",

    // Drizzle
    50: "Light drizzle",
    51: "Lots drizzle",
    52: "More drizzle",
    53: "Lots drizzle",
    54: "Heavy drizzle",
    55: "Lots drizzle",
    56: "Icy drizzle",
    57: "Heavy icy drizzle",
    58: "Rain drizzle",
    59: "Lots rain drizzle",

    // Rain
    60: "Light rain",
    61: "Lots rain",
    62: "More rain",
    63: "Lots rain",
    64: "Heavy rain",
    65: "Lots rain",
    66: "Icy rain",
    67: "Heavy icy rain",
    68: "Rain snow",
    69: "Lots rain snow",

    // Solid precipitation not in showers
    70: "Light snow",
    71: "Lots snow",
    72: "More snow",
    73: "Lots snow",
    74: "Heavy snow",
    75: "Lots snow",
    76: "Icy dust",
    77: "Snow bits",
    78: "Snow stars",
    79: "Ice bits",

    // Showery precipitation, or precipitation with current or recent thunderstorm
    80: "Light showers",
    81: "Heavy showers",
    82: "Big showers",
    83: "Rain snow showers",
    84: "Heavy rain snow",
    85: "Light snow showers",
    86: "Heavy snow showers",
    87: "Light hail",
    88: "Heavy hail",
    89: "Light hail",
    90: "Heavy hail",
    91: "Rain storm",
    92: "Heavy rain",
    93: "Snow rain",
    94: "Heavy snow rain",
    95: "Rain storm",
    96: "Hail storm",
    97: "Big storm",
    98: "Dust storm",
    99: "Big hail storm"
};

async function fetchWeather() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=78.2233&longitude=15.6469&current=temperature_2m,rain,snowfall,weather_code&wind_speed_unit=ms&timezone=Europe%2FBerlin&forecast_days=3");

        return await response.json();
    }
    catch (error){
        console.error("Error fetching weather data:",error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    const fetchedWeatherData = await fetchWeather();
    console.log(fetchedWeatherData);

    const wmoDesc = wmoCodes[fetchedWeatherData.current.weather_code];
    const temperature = fetchedWeatherData.current.temperature_2m;

    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `
            <p class="weather-container m-0">Longyearbyen Weather:</p>
            <p class="weather-container m-0">${temperature} °C, "${wmoDesc}"</p>
        `;
});