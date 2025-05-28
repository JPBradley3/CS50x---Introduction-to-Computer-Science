# README: BMP Image Filter Program

## Overview

This project is a command-line BMP image filter program written in C. It applies one of several filters to a 24-bit uncompressed BMP file and outputs the result to a new file.

The supported filters are:

- `-b` : Blur

- `-g` : Grayscale

- `-r` : Reflection

- `-s` : Sepia

## Usage

The program expects exactly one filter flag and two filenames: the input BMP file and the output BMP file.

```
./filter -g input.bmp output.bmp
```

Only one filter flag may be provided at a time.

## Building

To compile the program, use `gcc` or another C compiler:

```
gcc -o filter filter.c helpers.c -lm
```

Make sure `helpers.h` and `helpers.c` are present in your project directory.

## Implementation Details

- The program reads BMP headers (`BITMAPFILEHEADER` and `BITMAPINFOHEADER`) and verifies file format compatibility.

- An image is loaded into dynamically allocated memory (`RGBTRIPLE` array).

- The selected filter is applied pixel-by-pixel.

- The processed image is written back to a BMP file with proper padding.

- Input validation and error handling ensure correct usage and file operations.

## License

Include your license information here.

## Contact

For questions or suggestions, please contact `your.email@example.com`.
