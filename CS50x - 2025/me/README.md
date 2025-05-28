# README: Greeting Program in C



## Overview

This is a simple C program that asks the user for their name and then greets them personally with their input. It uses the CS50 library to get user input via the `get_string` function.

## Features

- Prompts the user for their name.

- Reads the input string safely using CS50's `get_string()` function.

- Prints a personalized greeting with the entered name.

## Usage

Compile the program with a C compiler, linking the CS50 library, for example:

```

gcc -o greet greet.c -lcs50

```

Run the compiled program:

```

./greet

```

Sample interaction:

```

What's your name? Bob
hello, Bob

```

## Code Description

The program uses the `get_string()` function from the CS50 library to prompt the user with "What's your name?" and stores the input in a `string` variable. It then prints the greeting "hello, `name`" using `printf`.

## Requirements

- CS50 library installed and accessible.

- A C compiler such as `gcc`.
