# Random Quote Generator

A simple Random Quote Generator built using **HTML, CSS, and JavaScript**.  
Clicking the button fetches a new inspirational quote from a public quotes API and displays it on the page.

## Features
- Fetch a new random quote on demand
- Shows quote text and author
- Handles loading state and errors
- Clean, centered UI

## Technologies Used
- HTML
- CSS
- JavaScript
- Quotable public API for random quotes

## How It Works
1. When the user clicks the button, JavaScript sends a request to the Quotable random quote endpoint.
2. The response is parsed as JSON.
3. Quote text and author are extracted and displayed in the DOM.
4. A loading message is shown while fetching, and errors are handled gracefully.

The Quotable API supports retrieving a single random quote with filtering options, as described in public documentation. :contentReference[oaicite:0]{index=0}

## Project Structure
Random-Quote-Generator
│
├── index.html
├── style.css
└── script.js


## Concepts Practiced
- `fetch()` API
- `async/await`
- `try/catch` error handling
- DOM manipulation
- Event listeners
- Working with third‑party APIs

## Future Improvements (Optional Ideas)
- Add category or tag filters for quotes
- Show a history of recently fetched quotes
- Copy quote to clipboard
- Add dark/light theme
- Show a quote author’s bio or link

## Author
Gulshan Kumar

## Preview 
![alt text](<Screenshot 2026-02-17 124502.png>)