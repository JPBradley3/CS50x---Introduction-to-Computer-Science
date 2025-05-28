# README: SQL Queries for Songs and Artists Dataset


## Introduction

This repository contains a collection of SQL queries designed to interact with a music database consisting primarily of two tables: `songs` and `artists`. These queries help retrieve various insights about songs, such as listing song names, filtering by attributes, ordering results, and computing averages.


## Files and Queries

- **1.sql** - Retrieves the names of all songs.
```sql
SELECT name FROM songs;
```

- **2.sql** - Lists all song names ordered by tempo in ascending order.
```sql
SELECT name FROM songs ORDER BY tempo;
```

- **3.sql** - Retrieves the top 5 longest songs based on their duration in milliseconds.
```sql
SELECT name FROM songs ORDER BY duration_ms DESC LIMIT 5;
```

- **4.sql** - Selects songs with high danceability, energy, and valence (each greater than 0.75).
```sql
SELECT name FROM songs WHERE danceability > 0.75 AND energy > 0.75 AND valence > 0.75;
```

- **5.sql** - Computes the average energy level across all songs.
```sql
SELECT avg(energy) FROM songs;
```

- **6.sql** - Lists all songs by the artist ``Post Malone''.
```sql
SELECT name FROM songs WHERE artist_id = (SELECT id FROM artists WHERE name = "Post Malone");
```

- **7.sql** - Computes the average energy level for songs by ``Drake''.
```sql
SELECT avg(energy) FROM songs WHERE artist_id = (SELECT id FROM artists WHERE name = "Drake");
```

- **8.sql** - Retrieves songs whose names contain featured artists (indicated by ``feat.'' in the title).
```sql
SELECT name FROM songs WHERE name LIKE "%feat.%";
```

## Notes

- The `songs` table is expected to have columns such as `name`, `tempo`, `duration_ms`, `danceability`, `energy`, `valence`, and `artist_id`.

- The `artists` table is expected to have columns `id` and `name`.

- The equality operator in SQL is ```=`'', not ```==`''.

- These queries assume standard SQL syntax and may need minor adjustments depending on the database system used.

## Usage

Simply run the desired query file on your SQL database connected to the music dataset to get the corresponding results and insights.
