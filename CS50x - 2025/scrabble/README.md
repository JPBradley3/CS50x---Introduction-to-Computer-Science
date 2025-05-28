# Scrabble Score Calculator

## Overview

This program calculates and compares the Scrabble scores of two words entered by two players. It prompts each player to input a word, computes the Scrabble score based on letter values, and announces the winner or a tie.

## Features

- Accepts words from two players.

- Supports case-insensitive letter scoring.

- Ignores non-alphabetical characters in the input.

- Displays which player wins or if the game is tied.

## How to Compile and Run

To compile the program (assuming the file is named `scrabble.c`), run:

```

gcc -o scrabble scrabble.c -lcs50

```

Then execute the program:

```

./scrabble

```

## Usage

Upon running, the program will prompt:

```

Player 1:

```

Enter the first word and press Enter.

Then:

```

Player 2:

```

Enter the second word and press Enter.

The program will then output either:

- `Player 1 wins!`

- `Player 2 wins!`

- `Tie!`

depending on which word has the higher Scrabble score.

## Code Structure

- `POINTS` array: maps each letter A-Z to its Scrabble point value.

- `compute_score` function: computes the score for a given word.

- `main` function: handles input/output and determines the winner.

## Dependencies

The program depends on the CS50 library for the `get_string` function. Ensure you have the CS50 library installed and linked during compilation.

## License

You can specify your license here (e.g., MIT License, GPL, etc.).
