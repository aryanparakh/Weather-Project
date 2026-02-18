
# 🌦️ Weather-Project

A feature-packed, interactive weather dashboard that goes beyond simple temperature tracking. This app provides a full lifestyle experience by suggesting **clothing**, **music playlists**, and **inspirational quotes** based on real-time atmospheric conditions.

## ✨ Advanced Features

* **Real-time Weather:** Fetches live data including temperature, humidity, and wind speed using the **OpenWeatherMap API**.
* **Dynamic Backgrounds:** Automatically changes the app's background image based on the searched city using the **Unsplash API**.
* **7-Day Forecast:** A unique, **draggable pop-up box** that displays the weather outlook for the upcoming week.
* **Smart Lifestyle Engine:**
* **Clothing Advisor:** Recommends what to wear based on the current temperature.
* **Weather Quotes:** Displays contextual motivational quotes (e.g., "Every cloud has a silver lining").
* **Music Integration:** Generates a themed playlist (Upbeat for Sun, Lo-fi for Haze) with an interactive **Play/Pause** functionality.


* **UX Enhancements:** Includes a custom **preloader** animation and a responsive design for all screen sizes.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom animations & Glassmorphism)
* **Scripting:** Vanilla JavaScript (ES6+)
* **APIs Integrated:**
* [OpenWeatherMap API](https://openweathermap.org/api) - Weather data
* [Unsplash API](https://unsplash.com/developers) - Dynamic city photography



## 📦 Project Structure

```text
Weather-Project/
├── images/          # Weather icons and static assets
├── index.html       # Main application structure
├── style.css        # Layout, animations, and media queries
└── script.js        # API logic, Draggable UI, and Lifestyle engine

```

## 🚀 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/Weather-Project.git

```


2. Open `script.js` and ensure your API keys are set (currently using the provided keys):
* `weatherApiKey`
* `imageApiKey`


3. Launch `index.html` in your browser.

## 💡 Technical Highlights

* **Asynchronous Flow:** Used `async/await` for seamless data fetching from multiple sources.
* **Draggable UI Logic:** Implemented custom mouse event listeners (`mousedown`, `mousemove`, `mouseup`) to make the forecast box interactive.
* **DOM Manipulation:** Heavily utilized template literals to dynamically update the UI without page reloads.
* **Custom Loaders:** Implemented a CSS-based bounce loader to improve perceived performance during initial data fetch.

## 🛣️ Roadmap

* [ ] **Geolocation:** Automatically detect the user's city on load.
* [ ] **Actual Music Streaming:** Integrate Spotify or YouTube API for real song playback.
* [ ] **Detailed Forecast:** Add UV index and air quality metrics.

---

**Developed with ❤️ by Aryan Parakh**

