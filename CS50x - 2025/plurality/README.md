# Plurality Voting Program

## Overview

This program implements a **plurality voting** system in C. It allows a list of candidates to be passed as command-line arguments, then collects votes from voters and determines the winner(s) based on who has the most votes.

This project uses the CS50 library for input functions such as `get_string` and `get_int`.

## Features

- Accepts up to 9 candidates via command-line arguments.

- Validates votes to ensure they are for valid candidates.

- Supports ties by printing all winners with the highest votes.

- Provides informative error messages for invalid input.

## Usage

After compiling, run the executable with candidates as command-line arguments:

```
./plurality Alice Bob Charlie
```

The program will prompt for the number of voters and then each voter's vote:

```
Number of voters: 3
Vote: Alice
Vote: Bob
Vote: Alice
```

Finally, it will print the winner(s):

```
Alice
```

## Compilation

Ensure you have the CS50 library installed. Then, compile using:

```
clang -o plurality plurality.c -lcs50
```

## Code Structure

- `main`: parses arguments, collects votes, and prints winners.

- `vote`: updates vote counts for valid candidate names.

- `print_winner`: identifies and prints the candidate(s) with the most votes.

## License

Specify your preferred license here, e.g., MIT License.

## Contact

For questions or feedback, contact: `your.email@example.com`
