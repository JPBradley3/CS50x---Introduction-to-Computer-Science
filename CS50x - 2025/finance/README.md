# Flask Finance Stock Trading App


## Overview

This Flask-based web application allows users to simulate stock trading by registering an account, looking up current stock prices, buying and selling shares, and keeping track of their portfolio and transaction history. The application uses a SQLite database to store user data and transaction history.

## Features

- User registration and secure login with password hashing

- Real-time stock price lookup

- Buying and selling shares with funds and holdings validation

- Portfolio overview showing owned stocks, share counts, current prices, and total value

- Transaction history log

- Cash balance management

## Technologies

- Python 3

- Flask web framework

- SQLite database via cs50 SQL module

- Jinja2 templating engine

- Werkzeug security for password hashing

## Setup Instructions

1. Clone the repository:

```

git clone <repository-url>
cd <repository-directory>

```

2. Install dependencies (preferably in a virtual environment):

```

pip install cs50 flask flask-session werkzeug

```

3. Set environment variables (optional, if needed):

```

export FLASK_APP=app.py
export FLASK_ENV=development

```

4. Run the Flask app:

```

flask run

```

5. Open your browser and navigate to `http://127.0.0.1:5000/`.

## File Structure

- `app.py` -- Main Flask application source code

- `helpers.py` -- Helper functions (e.g., `apology`, `lookup`, `usd`)

- `templates/` -- HTML templates for Flask routes

- `finance.db` -- SQLite database file (created automatically)

- `static/` -- Static assets like CSS, JavaScript, and images (if any)

## Usage

1. Register a new user.

2. Log in with your credentials.

3. Use the **Quote** page to check current stock prices.

4. Buy shares using available cash on the **Buy** page.

5. Sell shares you own on the **Sell** page.

6. View your portfolio on the home page.

7. Review your transaction history on the **History** page.

8. Log out when finished.

## Security Notes

- Passwords are hashed securely with Werkzeug's `generate_password_hash`.

- Sessions are managed securely using Flask-Session.

- User input is validated to prevent invalid or malicious submissions.

## Acknowledgments

This project is inspired by the CS50 Finance problem set and follows many design patterns from the CS50 curriculum.
