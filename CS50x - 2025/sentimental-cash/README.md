# README: Coin Counting Program



## Overview

This Python program calculates the minimum number of coins (quarters, dimes, nickels, and pennies) required to make change for a given dollar amount. The user is prompted to input the amount owed, and the program outputs the least number of coins needed.

## Requirements

- Python 3.x

- `cs50` library (for the `get_float` function)

## Installation

You can install the `cs50` library using `pip`:

```

pip install cs50

```

## Usage

Run the program in your terminal or command prompt:

```

python coin_count.py

```

You will be asked to enter the amount owed (e.g., 0.41). The program will then output the minimum number of coins required to make that amount.

## Example

```

Write down the amount you owe to calculate the minimum number of coins (in $ and ¢)...
Owed: 0.41
4

```

Here, `4` means two quarters, one dime, and one penny (total 4 coins).

## Code Summary

- Prompt the user to enter a positive float value.

- Convert the amount to cents and round it.

- Use integer division and modulo to count coins efficiently.

- Print the total minimum number of coins.

