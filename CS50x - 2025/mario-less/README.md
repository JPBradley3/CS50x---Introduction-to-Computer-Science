# README: Pyramid Hashes Program



## Overview

This program prompts the user to input a height between 1 and 8 and then prints a right-aligned half-pyramid of hashes (`#`) of the specified height. It uses nested loops to manage spaces and hash symbols for proper alignment.

## Features

- Validates user input to ensure height is between 1 and 8.

- Prints a right-aligned half-pyramid using loops.

- Uses `get_int` from the CS50 library for input.

## Usage

```

$ ./pyramid
Height: 4
#
##
###
####

```

## Code Snippet

```

for (int row = 0; row < height; row++)
{
for (int column = 0; column < height; column++)
{
if (row + column >= height - 1)
printf("#");
else
printf(" ");
}
printf("\n");
}

```

## Prerequisites

- CS50 Library (for `get_int`)

- C compiler (e.g., `gcc`)

## Compiling

Compile with:

```

gcc -o pyramid program.c -lcs50

```

## Author

Your Name (your.email@example.com)
