# Notes App

A simple Notes App built using **HTML, CSS, and JavaScript** that allows users to add, delete, and persist notes using LocalStorage.

## Features
- Add notes dynamically
- Delete individual notes
- Notes persist after page refresh
- Scrollable notes list
- Clean and modern UI

## Technologies Used
- HTML
- CSS
- JavaScript
- LocalStorage

## How It Works
1. User enters a note and clicks **Add Note**.
2. The note is pushed into a JavaScript array.
3. The array is saved in LocalStorage using `JSON.stringify()`.
4. Notes are rendered dynamically in the UI.
5. Clicking the delete button removes the note from the array and updates LocalStorage.

## Project Structure
Notes-App
│
├── index.html
├── style.css
└── script.js

## Concepts Practiced
- Arrays
- LocalStorage
- JSON.stringify() and JSON.parse()
- DOM Manipulation
- Event Delegation
- Dynamic Rendering

## Author
Gulshan Kumar

## Preview
![alt text](<Screenshot 2026-02-17 134535.png>)