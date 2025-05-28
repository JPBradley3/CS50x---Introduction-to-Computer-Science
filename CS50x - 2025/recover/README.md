# JPEG Recovery Tool



## Overview

This program is a command-line tool to recover JPEG files from a raw forensic image, such as a memory card dump. It reads the input file in 512-byte blocks, detects the beginning of JPEG files by looking for JPEG headers, and writes the recovered JPEG files to the current directory.

## Features

- Reads raw disk images in binary mode.

- Detects JPEG file signatures to identify the start of JPEGs.

- Recovers multiple JPEG files, saving each as `000.jpg`, `001.jpg`, `002.jpg`, etc.

- Designed to work with forensic images that are block-aligned.

## Requirements

- A C compiler (e.g., `gcc` or `clang`).

- A raw forensic image file (e.g., `card.raw`) to recover JPEGs from.

## Usage

```

./recover card.raw

```

where `card.raw` is the input filename.

The program will output recovered JPEGs named with three-digit numbers followed by `.jpg` (e.g., `000.jpg`, `001.jpg`, ...).

## Compilation

Compile the program using a C compiler:

```

gcc -o recover recover.c

```

## How It Works

The program reads 512 bytes at a time from the input file and examines the first four bytes to detect JPEG signatures. These signatures follow this pattern for the first four bytes of a JPEG file:

- Byte 0: 0xff

- Byte 1: 0xd8

- Byte 2: 0xff

- Byte 3: 0xe0 to 0xef

Upon detecting a new JPEG header, a new JPEG output file is created, and subsequent 512-byte blocks are written to this file until another JPEG header is found or the input file ends.

## Notes

- Make sure to run the program in a directory where you have write access.

- Recovering JPEGs from corrupted or non-standard images may not be perfect.

## License

This project is released under the MIT License.
