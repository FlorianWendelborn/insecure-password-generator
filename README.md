# passwordGen.js

## Description
Generates a specified amount of random passwords.

## Disclaimer
This is not made for serious passwords. It's using the javascript function Math.random() to get random stuff, therefore it's not the most secure solution. Consider using something else for serious stuff.

## Usage
### Command Line Arguments
| $ | long version | default | description                   |
|--:|:-------------|:--------|:------------------------------|
| n | count        | 1       | amount of generated passwords |
| l | length       | 128     | length of each password       |
| f | format       | array   | output format                 |
| o | output       | stdout  | output method                 |

### Available Formats
|    name | description                                                 |
|--------:|:------------------------------------------------------------|
|   array | default javascript array                                    |
| newline | one password per line                                       |
|  number | same as newline, but with "lineIndex: " before each element |

### Available Output Methods
|   name | description                            |
|-------:|:---------------------------------------|
| stdout | writes to stdout                       |
| stderr | writes to stderr                       |
|   file | writes to specified file (--file path) |

## License

The MIT License (MIT)

Copyright (c) 2014 Florian Wendelborn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
