# DNA Matching Program


## Overview

This project implements a DNA matching program in Python that identifies a person based on a DNA sequence and a database of short tandem repeats (STRs). The program compares the longest run of specific STR subsequences in a given DNA sample against a database of individuals’ STR counts to find a matching profile.

## Features

- Reads a CSV database containing individual names and STR counts.

- Reads a text file containing a DNA sequence.

- Computes longest runs of specified STRs in the DNA sequence.

- Matches DNA STR counts against individuals in the database.

- Prints the name of the matching individual or indicates if no match is found.

## Usage

Compile and run the Python script from the command line as follows:

```

python dna.py database.csv sequence.txt

```

**Arguments:**

- \verb|database.csv|: CSV file containing STR counts for each individual.

- \verb|sequence.txt|: Text file containing the DNA sequence to analyze.

## Input File Format

### Database CSV

The CSV should be formatted as follows:

```

name,AGAT,AATG,TATC
Alice,4,1,5
Bob,3,2,8
Charlie,5,1,3

```

### DNA Sequence

A plain text file containing a single DNA sequence (e.g., ACTGAGATAGATAGATAATG...).

## Functions

- **`longest_match(sequence, subsequence)`**: Returns the longest run of `subsequence` in `sequence`.

## Dependencies

This script requires Python 3 and only uses Python’s standard libraries (`csv`, `sys`).

## License

Specify your license here (e.g., MIT License).

## Contact

Your Name
Your Email
Your GitHub or website (optional)
