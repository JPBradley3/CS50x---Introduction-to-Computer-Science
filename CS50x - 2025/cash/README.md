# README: Coin Change Calculator


## Overview

This program calculates the minimum number of US coins (quarters, dimes, nickels, and pennies) required to make change for a given number of cents. It prompts the user to input a non-negative integer amount of cents and then computes the least number of coins needed to make that amount.

## Requirements

- **CS50 Library**: The program uses the CS50 library for input functions. Make sure to have it installed and properly set up.

- **C Compiler**: Compatible with any standard C compiler such as `gcc`.

## Compilation

To compile the program, run the following command in your terminal:

```

gcc -o coin_change coin_change.c -lcs50

```

## Usage

Run the compiled executable:

```

./coin_change

```

The program will prompt:

```

No of cents:

```

Enter a non-negative integer representing the amount of cents. The program will output the minimum number of coins required.

## Functions Description

- `int get_cents(void);`
Prompts the user for a non-negative integer input representing cents.

- `int calculate_quarters(int cents);`
Returns the number of quarters that fit into the given cents.

- `int calculate_dimes(int cents);`
Returns the number of dimes that fit into the given cents.

- `int calculate_nickels(int cents);`
Returns the number of nickels that fit into the given cents.

- `int calculate_pennies(int cents);`
Returns the number of pennies that fit into the given cents.

## Example

```

No of cents: 87
6

```

This means that 87 cents can be made with 6 coins (3 quarters, 1 dime, 0 nickels, and 2 pennies).

## License

This project is released under the MIT License.
