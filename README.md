# Vanity Roles Website

A FastAPI web application for the Vanity Roles Discord bot. This website showcases the bot's features and provides a premium subscription interface.

## Features

- Modern, responsive design using Bulma CSS framework
- FastAPI backend with static file serving
- Premium subscription page with interactive forms
- Animated elements using AOS (Animate On Scroll)
- Mobile-responsive navigation

## Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python -m app.main
```

The application will be available at `http://localhost:4545`

## Project Structure

```
├── app/
│   ├── main.py           # FastAPI application
│   └── static/           # Static files
│       ├── css/          # Stylesheets
│       ├── js/           # JavaScript files
│       ├── img/          # Images
│       ├── index.html    # Main page
│       └── premium.html  # Premium subscription page
├── requirements.txt      # Python dependencies
├── Dockerfile           # Docker configuration
└── Procfile            # Heroku deployment
```

## Deployment

This application is configured for deployment on Heroku with the included `Procfile` and `Dockerfile`.

## Technologies Used

- FastAPI - Python web framework
- Bulma - CSS framework
- jQuery - JavaScript library
- AOS - Animate On Scroll library
- Tippy.js - Tooltip library
