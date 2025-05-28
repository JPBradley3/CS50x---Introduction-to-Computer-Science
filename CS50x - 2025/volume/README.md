# Volume Modifier for WAV Audio Files



## Overview

This program modifies the volume of a `.wav` audio file by scaling its 16-bit PCM samples by a user-specified factor. It reads a `.wav` file, copies its header, scales each audio sample, and writes the result to a new output file.

## Usage

```

./volume input.wav output.wav factor

```

where:

- `input.wav` is the path to the source WAV file.

- `output.wav` is the path to the destination WAV file.

- `factor` is a floating point number specifying the volume scale. Values greater than 1 will increase volume, values between 0 and 1 decrease it.

## Details

- The program reads the first 44 bytes of the input file as the WAV header and copies it verbatim to the output file.

- After the header, the program reads 16-bit signed samples, multiplies each by the scaling factor, clamps the result to the `int16_t` range (-32768 to 32767), and writes the scaled samples to the output.

- The program handles errors such as file open failures and read/write errors gracefully.

## Compilation

Compile the program using a standard C compiler, e.g., GCC:

\begin{lstlisting}
gcc -o volume volume.c
\end{lstlisting}

## Example

To reduce the volume of `input.wav` to half and save it as `quieter.wav`:

```

./volume input.wav quieter.wav 0.5

```

## Notes

- The program assumes the WAV file uses 16-bit PCM encoding.

- The program does not modify the WAV header besides copying it; if the input WAV has metadata specifying data size or other fields, those remain unchanged.

- Multiplying the samples by a large factor may cause clipping. The program clamps clipped values to avoid wrap-around distortion.
