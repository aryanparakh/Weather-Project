const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector("#search");
const weatherIcon = document.querySelector(".weather-icon");
const appContainer = document.querySelector(".app-container");

const weatherApiKey = 'b2fa3271ab55c9c76e1b2a2d1afd0478';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const forecastURL = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&exclude=current,minutely,hourly&appid=';
const imageApiKey = "2BsfBnNAfcAGF3oX4F_fRIlYnOXYBGYyJpeHfo8AWp4";
const imageURL = "https://api.unsplash.com/search/photos?page=1&query=";

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector("#preloader").style.display = "none";
    }, 2000);
});

// Weather API call
async function checkWeather(city) {
    const response = await fetch(weatherURL + city + "&appid=" + weatherApiKey);
    
    if (response.status === 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.visibility = "hidden";
        appContainer.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/weather.jpg')";
        return;
    }

    const data = await response.json();
    setTimeout(() => {
        updateData(data);
    }, 500);
}

// Fetch and display next 7 days forecast
// async function getForecast(lat, lon) {
//     const response = await fetch(forecastURL + weatherApiKey + `&lat=${lat}&lon=${lon}`);
//     const data = await response.json();

//     let forecastList = '';
//     data.daily.slice(1, 8).forEach(day => {
//         let date = new Date(day.dt * 1000);
//         let dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
//         forecastList += `<li>${dayName}: ${Math.round(day.temp.day)}°C</li>`;
//     });

//     document.getElementById('forecast-list').innerHTML = forecastList;
// }

// Fetch and display next 7 days forecast
// async function getForecast(lat, lon) {
//     const response = await fetch(forecastURL + weatherApiKey + `&lat=${lat}&lon=${lon}`);
//     const data = await response.json();
    
//     let forecastList = '';
//     data.daily.slice(1, 8).forEach(day => {
//         let date = new Date(day.dt * 1000);
//         let dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
//         forecastList += `<li>${dayName}: ${Math.round(day.temp.day)}°C</li>`;
//     });

//     // Ensure forecast list is updated in HTML
//     document.getElementById('forecast-list').innerHTML = forecastList;
// }
const showForecastBtn = document.getElementById("show-forecast-btn");
const forecastBox = document.getElementById("forecast-box");
const closeForecastBtn = document.getElementById("close-forecast-btn");
const forecastList = document.getElementById("forecast-list");

// Make the forecast box draggable
function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
    });

    function drag(e) {
        if (isDragging) {
            element.style.left = e.clientX - offsetX + "px";
            element.style.top = e.clientY - offsetY + "px";
        }
    }

    function stopDragging() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDragging);
    }
}

// Show 7-day forecast
async function show7DayForecast(city) {
    const response = await fetch(weatherURL + city + "&appid=" + weatherApiKey);
    const data = await response.json();
    
    if (response.status === 200) {
        let forecastHTML = '';
        data.daily.slice(1, 8).forEach(day => {
            let date = new Date(day.dt * 1000);
            let dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            forecastHTML += `<li>${dayName}: ${Math.round(day.temp.day)}°C</li>`;
        });
        
        forecastList.innerHTML = forecastHTML;
    }
}

// Show the forecast box when the button is clicked
showForecastBtn.addEventListener("click", () => {
    forecastBox.style.display = "block";
    show7DayForecast("Kolkata"); // Replace with dynamic city if needed
});

// Close the forecast box
closeForecastBtn.addEventListener("click", () => {
    forecastBox.style.display = "none";
});

// Make the forecast box draggable
makeDraggable(forecastBox);



// Clothing suggestions based on temperature
function getClothingSuggestion(temp) {
    if (temp > 30) {
        return "It's hot! Wear light, breathable clothes.";
    } else if (temp > 20) {
        return "The weather is pleasant. A light jacket should suffice.";
    } else if (temp > 10) {
        return "It's a bit chilly. Wear a jacket or sweater.";
    } else {
        return "It's cold! Make sure to bundle up with warm clothes.";
    }
}

// Motivational/Inspirational weather quote
function getWeatherQuote(condition) {
    const quotes = {
        'Clear': "The sun will shine again after the storm.",
        'Clouds': "Every cloud has a silver lining.",
        'Rain': "Rain makes everything grow. Stay positive.",
        'Snow': "Snow is the poetry of nature. Stay warm!",
        'Haze': "Keep your eyes on the bright side, the sun will shine again."
    };

    return quotes[condition] || "Embrace the weather, it's a part of life.";
}

// Music playlist based on weather
// function getMusicPlaylist(condition) {
//     const playlists = {
//         'Clear': ['Upbeat tunes', 'Feel good music', 'Summer hits'],
//         'Clouds': ['Calm indie', 'Relaxing melodies'],
//         'Rain': ['Cozy music', 'Rainy day playlists'],
//         'Snow': ['Winter vibes', 'Chilled music'],
//         'Haze': ['Lo-fi beats', 'Mellow tracks']
//     };

//     return playlists[condition] || ['Feel good music', 'Chill vibes'];
// }
// Update the music playlist
// function getMusicPlaylist(condition) {
//     const playlists = {
//         'Clear': ['Upbeat tunes', 'Feel good music', 'Summer hits'],
//         'Clouds': ['Calm indie', 'Relaxing melodies'],
//         'Rain': ['Cozy music', 'Rainy day playlists'],
//         'Snow': ['Winter vibes', 'Chilled music'],
//         'Haze': ['Lo-fi beats', 'Mellow tracks']
//     };

//     return playlists[condition] || ['Feel good music', 'Chill vibes'];
// }

// Music playlist based on weather
function getMusicPlaylist(condition) {
    const playlists = {
        'Clear': ['Upbeat tunes', 'Feel good music', 'Summer hits'],
        'Clouds': ['Calm indie', 'Relaxing melodies'],
        'Rain': ['Cozy music', 'Rainy day playlists'],
        'Snow': ['Winter vibes', 'Chilled music'],
        'Haze': ['Lo-fi beats', 'Mellow tracks']
    };

    return playlists[condition] || ['Feel good music', 'Chill vibes'];
}

// Play/Pause song functionality
let currentAudio = null;

function togglePlayPause(button, song, url) {
    if (currentAudio && !currentAudio.paused) {
        // Pause the current audio
        currentAudio.pause();
        button.textContent = "Play"; // Change button text to Play
    }

    if (currentAudio && currentAudio.src === url) {
        // If it's the same song, pause it
        currentAudio.pause();
        button.textContent = "Play"; // Change button text to Play
    } else {
        // Play the new song
        if (currentAudio) {
            currentAudio.pause(); // Stop the previous song if any
        }

        currentAudio = new Audio(url); // Create new audio instance
        currentAudio.play(); // Play the new song
        button.textContent = "Pause"; // Change button text to Pause
    }
}

async function updateMusicPlaylist(condition) {
    let playlist = getMusicPlaylist(condition);
    let playlistHTML = '';

    playlist.forEach((song, index) => {
        // Replace this with actual song URLs or a proper method to fetch music
        let songURL = `https://example.com/songs/${song.toLowerCase().replace(' ', '-')}.mp3`; // Dummy URL for song
        
        playlistHTML += `
            <li>
                ${song} 
                <button onclick="togglePlayPause(this, '${song}', '${songURL}')">Play</button>
            </li>`;
    });

    document.querySelector("#playlist").innerHTML = playlistHTML;
}

// Call this function to update the playlist
updateMusicPlaylist('Clear'); // Or pass the dynamic condition like "Rain" or "Clouds"




// Inside updateData function
async function updateData(data) {
    // Other update logic...
    
    // Display the music playlist
    let playlist = getMusicPlaylist(data.weather[0].main); // Use weather condition
    let playlistHTML = '';
    playlist.forEach(song => {
        playlistHTML += `<li>${song}</li>`;
    });

    // Make sure you have an element with id="playlist" to display the music
    document.querySelector("#playlist").innerHTML = playlistHTML;

    // Show forecast and weather data
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = 'none';

    // Get forecast for next 7 days
    getForecast(data.coord.lat, data.coord.lon);
}


async function updateData(data) {
    // Update weather data
    document.querySelector("#city").textContent = data.name;
    document.querySelector("#temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + '%';
    document.querySelector(".wind").textContent = data.wind.speed + "Km/h";

    // Change the weather icon
    const weatherCondition = data.weather[0].main;
    if (weatherCondition === 'Clear') {
        weatherIcon.src = "images/clear.png";
        document.querySelector("#condition").textContent = 'Clear';
    } else if (weatherCondition === 'Clouds') {
        weatherIcon.src = "images/clouds.png";
        document.querySelector("#condition").textContent = 'Cloudy';
    } else if (weatherCondition === 'Haze') {
        weatherIcon.src = "images/haze.png";
        document.querySelector("#condition").textContent = 'Haze';
    } else if (weatherCondition === 'Mist') {
        weatherIcon.src = "images/mist.png";
        document.querySelector("#condition").textContent = 'Mist';
    } else if (weatherCondition === 'Rain') {
        weatherIcon.src = "images/rain.png";
        document.querySelector("#condition").textContent = 'Rainy';
    } else if (weatherCondition === 'Snow') {
        weatherIcon.src = "images/snow.png";
        document.querySelector("#condition").textContent = 'Snowy';
    }

    // Display the clothing suggestion
    document.querySelector("#clothing").textContent = getClothingSuggestion(data.main.temp);

    // Display the weather quote
    document.querySelector("#quote").textContent = getWeatherQuote(weatherCondition);

    // Display the music playlist
    let playlist = getMusicPlaylist(weatherCondition);
    let playlistHTML = '';
    playlist.forEach(song => {
        playlistHTML += `<li>${song}</li>`;
    });
    document.querySelector("#playlist").innerHTML = playlistHTML;

    // Show forecast and weather data
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = 'none';

    // Get forecast for next 7 days
    getForecast(data.coord.lat, data.coord.lon);
}

// Default call for Kolkata
checkWeather("Kolkata");
generateImage("Kolkata");

// Image API call
async function generateImage(city) {
    const response = await fetch(imageURL + city + "&client_id=" + imageApiKey);
    const data = await response.json();
    const img = data.results[0].urls.full;
    appContainer.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`;
}

searchBtn.addEventListener('click', (e) => {
    generateImage(searchBox.value.trim());
    checkWeather(searchBox.value.trim());
});
