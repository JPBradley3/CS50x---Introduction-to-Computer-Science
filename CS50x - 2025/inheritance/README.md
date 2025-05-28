# Family Blood Type Simulator

*This project simulates the inheritance of blood type alleles over multiple generations. It generates a family tree where each person has two parents and two alleles, randomly assigned or inherited according to genetic rules.*

## Introduction

This program creates a family tree of a specified number of generations, assigning blood type alleles to each member based on their parents'. The blood types are composed of alleles 'A', 'B', or 'O', randomly generated for the oldest generation and inherited probabilistically for descendants.

## Features

- Recursive family tree generation with customizable depth.

- Random and inherited allele assignment.

- Pretty-printed output with indentation and generation labels.

- Proper memory management to avoid leaks.

## Usage

```

$ gcc -o bloodtype bloodtype.c
$ ./bloodtype

```

The program will print the blood type of each family member starting from the child down to great-grandparents (default 3 generations).

## Code Overview

- `create_family(int generations)`: Recursively creates persons, assigning alleles and parents.

- `print_family(person *p, int generation)`: Displays family tree with generation indentation.

- `free_family(person *p)`: Recursively frees allocated memory.

- `random_allele()`: Generates random blood type allele.

## Blood Types

Blood type alleles can be:

- **A**

- **B**

- **O**

Every individual has two alleles. Their blood type is determined by the combination of these alleles.

## Compilation and Requirements

- Requires a C compiler (e.g. `gcc`).

- Tested on Unix-like system.

## License

This project is open source and free to use.

## Contact

For questions or contributions, contact `your.email@example.com`.
