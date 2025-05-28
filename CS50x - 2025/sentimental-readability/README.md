# Coleman-Liau Index Calculator


## Overview

This Python program calculates the approximate U.S. grade level needed to comprehend a given text. It implements the **Coleman-Liau index**, which estimates readability based on the number of letters, words, and sentences in the input text.

## How it Works

The program:

- Prompts the user to input text

- Counts the number of letters, words, and sentences

- Uses the Coleman-Liau formula:

$$
\text{index} = 0.0588 \times L - 0.296 \times S - 15.8
$$

where
\begin{itemize}

- $L$ = average number of letters per 100 words,

- $S$ = average number of sentences per 100 words.

\item Outputs the grade level rounded to the nearest integer.
\end{itemize}

## Usage

To run the program:

1. Ensure you have the `cs50` Python library installed. You can install it via pip:

```

pip install cs50

```

2. Run the script in a terminal or command prompt:

```

python coleman_liau.py

```

3. Enter the text when prompted.

4. The program prints the reading level grade.

## Example

`Text:` When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow.

`Output:` Grade 5

## Notes

- The word count starts at 1, considering the first word before the first space.

- Sentences are counted by occurrences of `'.'`, `'!'`, or `'?'`.

- Grades above 16 are reported as `"Grade 16+"`.

- Grades below 1 are reported as `"Before Grade 1"`.
