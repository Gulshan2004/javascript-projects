# Weather App

A Weather App built using **HTML, CSS, and JavaScript** that allows users to search for a city and view real-time temperature and wind speed using public weather APIs.

## Features
- Search weather by city name
- Real-time temperature and wind speed
- Loading state while fetching data
- Error handling for invalid cities
- Dynamic UI updates
- Weather emoji based on temperature

## Technologies Used
- HTML
- CSS
- JavaScript
- Open-Meteo Weather API
- Open-Meteo Geocoding API

## How It Works
1. User enters a city name.
2. A Geocoding API request retrieves latitude and longitude.
3. The Weather API uses those coordinates to fetch weather data.
4. Temperature and wind speed are displayed dynamically.
5. The button is temporarily disabled while loading to prevent multiple requests.

## Project Structure
Weather-App
│
├── index.html
├── style.css
└── script.js


## Concepts Practiced
- fetch() API
- Async / Await
- try / catch / finally
- DOM Manipulation
- Event Listeners
- Working with APIs
- Input validation

## Author
Gulshan Kumar

## Preview 
![alt text](<Screenshot 2026-02-17 125204.png>)