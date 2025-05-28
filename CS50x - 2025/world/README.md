# Hello, World! Program in C


## Overview

This is a simple C program that prints ``hello, world'' to the standard output.

## Source Code

```c
#include <stdio.h>

int main(void)
{
printf("hello, world");
}
```

## Compilation

Compile the program using a C compiler such as GCC:

```
gcc -o hello hello.c
```

## Usage

Run the compiled program:

```

./hello

```

It will output:

```

hello, world

```

## Notes

The output does not include a newline character, so the prompt may appear at the end of the printed line.
