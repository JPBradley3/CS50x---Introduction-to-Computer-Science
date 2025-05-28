# README: Half-Pyramid Printer in C



## Overview

This program is a simple C application that prints a right-aligned half-pyramid made of hash (`#`) characters. The height of the pyramid is determined by user input and must be an integer between 1 and 8 inclusive.

## Features

- Prompts the user to enter a height between 1 and 8.

- Validates user input to ensure it is within the allowed range.

- Prints a right-aligned half-pyramid of hashes corresponding to the input height.

## Usage

Compile the program with a C compiler, for example:

```

gcc -o pyramid pyramid.c -lcs50

```

Run the compiled program:

```

./pyramid

```

Sample input and output:

```

Height:
4

#
##
###
####

```

## Code Explanation

The program uses nested `for` loops:

- The outer loop iterates over rows.

- The inner loop iterates over columns.

- For each position, the program prints a space or a hash depending on whether the current column and row satisfy a condition to align the hashes on the right.

## Requirements

- `cs50` library installed (for `get_int` function).

- A C compiler such as `gcc`.
