# Keystrokes

A simple typing speed test built with React.

## Features

- Random common English words for each test
- Duration picker (15s / 30s / 60s)
- Real-time character highlighting (green = correct, red = mistake)
- Progress bar showing how far you've typed
- Results screen with WPM, Accuracy, Errors, and Time Spent
- Keyboard shortcuts: **Tab** to restart, **Enter** for new words after finishing

## Tech Stack

- React (Context API, useState, useEffect, useRef)
- Bootstrap 5
- Vite

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.
