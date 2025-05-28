# Birthday Reminder Flask App


## Overview

A simple Flask web application to manage birthdays. Users can add, edit, and delete birthdays stored in an SQLite database.

## Features

- Add new birthdays with name, month, and day.

- View list of all birthdays.

- Edit existing birthdays.

- Delete birthdays.

- Input validation to ensure valid dates.

- Uses SQLite database via CS50's SQL library.

- Prevents caching of responses for up-to-date data.

## Tech Stack

- Python 3

- Flask

- CS50 Library for SQL (wrapper over SQLite)

- SQLite

- HTML / Jinja2 for templates

## Setup and Installation

1. **Clone the repository**

```

git clone https://github.com/your-username/birthday-reminder.git
cd birthday-reminder

```

2. **Create and activate a virtual environment (optional, but recommended)**

```

python3 -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

```

3. **Install requirements**

This app depends on the CS50 library and Flask. Install via pip:

```

pip install cs50 flask

```

4. **Set up the SQLite database**

Make sure you have a `birthdays.db` SQLite database file with a `birthdays` table.

You can create the database and table by running:

```

sqlite3 birthdays.db

CREATE TABLE birthdays (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
month INTEGER NOT NULL,
day INTEGER NOT NULL
);
.exit

```

5. **Run the application**

```

python app.py

```

By default, Flask will run on `http://127.0.0.1:5000/`.

6. **Navigate to the app**

Open your web browser and go to `http://127.0.0.1:5000/` to use the birthday reminder app.

## Usage

- On the home page, you'll see a form to add a new birthday.

- Below the form is the current list of birthdays.

- Use the ``Edit'' and ``Delete'' buttons next to each birthday to update or remove entries.

## Project Structure

```

birthday-reminder/
│
├── app.py             # Main Flask application
├── birthdays.db       # SQLite database file (not included in repo)
├── templates/
│   ├── index.html     # Main page
│   ├── error.html     # Error display page
│
├── README.md          # This file
└── requirements.txt   # (optional) Python dependencies

```

## Notes

- The app currently does not track birth years.

- The date validation allows February 29th without checking for leap years.

- The app uses CS50's `SQL` library to simplify SQLite queries.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to open issues or submit pull requests for improvements!
