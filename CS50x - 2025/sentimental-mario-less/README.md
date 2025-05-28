# README: Pyramid Height Input Program

*This Python program, using the `cs50` library, prompts the user for a height between 1 and 8 and prints a left-aligned pyramid of that height. The code ensures valid input by re-prompting if the input is out of the specified range.*

## Introduction

This program is a simple script that demonstrates input validation and printing formatted output based on user input. It is useful for learning basic control structures such as loops and conditionals in Python.

## Code

```python
from cs50 import get_int

## ensure valid input; prompt user if h is <1 or >8
while True:
h = get_int('height: ')
if h < 1 or h > 8:
h = get_int('height: ')
if h >= 1 or h <= 8:
break

## iterate through h
for i in range(h):
print((h - 1 - i) * " ", end="")
print((i + 1) * "#")
```

## Usage

Run the script in an environment where the `cs50` Python library is installed. The user will be prompted to enter a height. If the input is outside the range 1-8, the prompt will repeat until a valid input is given.

```

height: 4
#
##
###
####

```

## Installation

To install the `cs50` library, run:

```

pip install cs50

```

Ensure you have Python installed (recommended Python 3.6 or higher).

## Contributing

Feel free to fork the repository and submit pull requests if you have improvements or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
