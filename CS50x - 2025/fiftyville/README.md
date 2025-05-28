# Investigation SQL Queries README



## Project Overview

This project contains a collection of SQL queries designed to support an investigation focused on activities occurring on July 28, 2021. The queries pull together data from interview transcripts, crime scene reports, bakery security logs, financial transactions, phone calls, and flight passenger records to provide a comprehensive view of events.

## Purpose

The goal is to identify key individuals, track movements, and uncover any suspicious activities associated with the investigation date. The queries help cross-reference multiple data sources to build a timeline and profile potential suspects.

## Database Schema

The relevant tables include:

- `interviews` --- Contains transcripts and metadata of interviews.

- `crime_scene_reports` --- Details of crime scenes by date and location.

- `bakery_security_logs` --- Records of entries and exits at the bakery.

- `people` --- Personal information, including license plates and phone numbers.

- `bank_accounts` and `atm_transactions` --- Financial records linked to persons.

- `phone_calls` --- Incoming and outgoing phone logs with call duration.

- `flights` and `passengers` --- Flight schedules and passenger manifests.

## Usage

To use these queries:

1. Connect to the investigation database using your preferred SQL client.

2. Run the provided queries to extract the targeted data.

3. Combine and analyze the results to build insights.

## Sample Queries

Example of a query fetching names exiting the bakery between 10:15 and 10:25 on July 28, 2021:

```

SELECT name FROM people
JOIN bakery_security_logs ON people.license_plate = bakery_security_logs.license_plate
WHERE day = "28" AND month = 7 AND year = 2021 AND hour = 10 AND minute >= 15 AND minute < 25 AND activity = 'exit';

```

## Contributing

Feel free to contribute improvements or additional queries to enhance the investigation scope. Please submit pull requests or issues.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
