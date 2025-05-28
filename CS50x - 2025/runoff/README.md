# Runoff Voting Program



## Overview

This program implements a runoff voting system in C, where voters rank candidates in order of preference. If no candidate wins a majority of the votes in the first round, the candidate with the fewest votes is eliminated, and votes are redistributed until a winner emerges or a tie occurs.

## Features

- Supports up to 100 voters and 9 candidates.

- Allows voters to rank candidates by preference.

- Automatically conducts runoff rounds until a winner is found or a tie is declared.

- Validates votes and handles invalid input gracefully.

## Usage

```

./runoff [candidate1] [candidate2] ... [candidateN]

```

where `[candidate1]`, `[candidate2]`, ... are the names of the candidates.

After running the program, you will be prompted to enter the number of voters and each voter's ranked preferences.

## Compilation

Make sure you have `gcc` or another C compiler installed. Compile the program with:

```

gcc -o runoff runoff.c -lcs50 -lm

```

(The `-lcs50` flag links the CS50 library, required for `get_int` and `get_string`. The `-lm` flag links the math library.)

## Code Structure

- `vote`: Records voter preferences.

- `tabulate`: Counts votes for non-eliminated candidates.

- `print_winner`: Checks if any candidate has a majority.

- `find_min`: Finds the minimum number of votes among remaining candidates.

- `is_tie`: Checks if the election is tied.

- `eliminate`: Eliminates candidate(s) with minimum votes.

## Known Issues

- Make sure to input candidate names exactly as specified in the command line, or the vote will be considered invalid.

- The program assumes valid integer input for the number of voters.

## License

This project is licensed under the MIT License.
