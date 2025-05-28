# README: Caesar Cipher Program



## Overview

This project implements a **Caesar cipher** encryption program in C.
A Caesar cipher shifts each alphabetical character in the plaintext by a fixed number of positions, wrapping around the alphabet.

## Usage

The program expects a single command-line argument `key`, which must be a positive integer. This integer represents the shift value.

To compile:

\begin{lstlisting}[language=bash]
gcc -o caesar caesar.c -lcs50
\end{lstlisting}

To run:

\begin{lstlisting}[language=bash]
./caesar key
\end{lstlisting}

For example, to encrypt with a key of 1:

\begin{lstlisting}[language=bash]
./caesar 1
plaintext: Hello, World!
ciphertext: Ifmmp, Xpsme!
\end{lstlisting}

## Details

- The key must consist entirely of digits and be positive.

- Alphabetical characters (both uppercase and lowercase) are shifted by the key.

- Non-alphabetical characters remain unchanged.

- If the key is invalid or absent, the program prints a usage message and exits.

## Requirements

- C compiler (e.g., `gcc`)

- `cs50` library for `get_string` function

## Example Output

\begin{lstlisting}
$ ./caesar 13
plaintext: Hello, CS50!
ciphertext: Uryyb, PF50!
\end{lstlisting}

## License

This project is released under the MIT License.
