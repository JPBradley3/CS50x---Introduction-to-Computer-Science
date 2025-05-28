# Spell-Checker README


## Overview

This project implements a simple command-line spell-checker in C. It reads a text file, identifies misspelled words based on a specified dictionary, and provides timing benchmarks for key operations such as loading the dictionary, checking words, measuring dictionary size, and unloading the dictionary.

## Features

- Loads a dictionary file into memory.

- Reads and spell-checks words from a text file.

- Ignores words with numbers or exceeding a maximum length.

- Prints misspelled words found in the input text.

- Reports performance benchmarks for loading, checking, sizing, and unloading.

- Supports specifying custom dictionary files via command-line arguments.

## Usage

To compile the program, use a C compiler such as `gcc`:

```

gcc -o speller speller.c dictionary.c -lcs50

```

Then run the program with:

```

// Using default dictionary
./speller textfile.txt

// Using a custom dictionary
./speller dictionary.txt textfile.txt

```

\noindent The program will output misspelled words followed by summary statistics and timing information.

## Dependencies

- Standard C libraries (`stdio.h`, `ctype.h`, `sys/resource.h`, etc.)

- A dictionary implementation (`dictionary.h` and its corresponding `dictionary.c`) providing the following functions:
\begin{itemize}

- `bool load(const char *dictionary);` — loads dictionary into memory

- `bool check(const char *word);` — checks if a word is in the dictionary

- `unsigned int size(void);` — returns the number of words in the dictionary

- `bool unload(void);` — unloads dictionary from memory and frees resources

\end{itemize}

## File Descriptions

- `speller.c` — main program implementing the spell-checker logic

- `dictionary.h` — dictionary interface

- `dictionary.c` — dictionary implementation (hash table, trie, etc.)

- `dictionaries/large` — example dictionary file with many words (default dictionary)

## Performance

The program uses `getrusage()` to measure CPU time spent loading the dictionary, checking words, determining dictionary size, and unloading the dictionary. These timings are displayed at program completion for benchmarking purposes.

