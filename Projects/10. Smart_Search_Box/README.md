# Smart Search Box

A simple Smart Search Box built using **HTML, CSS, and JavaScript** that captures user input and displays the searched text dynamically without refreshing the page.

## Features
- Takes user input from a form
- Prevents page reload on submit
- Input validation for empty fields
- Displays search result dynamically
- Clean and centered UI

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. The user types a query in the input box.
2. When the form is submitted, JavaScript prevents the default page reload using `event.preventDefault()`.
3. The input value is read and trimmed to remove extra spaces.
4. If the input is empty, a warning message is shown.
5. Otherwise, the searched text is displayed dynamically on the page.

## Project Structure
Smart-Search-Box
│
├── index.html
├── style.css
└── script.js

## Concepts Practiced
- Form Handling
- Event Listeners
- preventDefault()
- DOM Manipulation
- Input Validation

## Author
Gulshan Kumar

## Preview
![alt text](<Screenshot 2026-02-17 125819.png>)