[![Solution tests](https://github.com/ntandoyenkosi1/valid-isbn/actions/workflows/tests.yml/badge.svg)](https://github.com/ntandoyenkosi1/valid-isbn/actions/workflows/tests.yml)

### Problem

The International Standard Book Number (ISBN) is a unique identifying number given to each published book.
Create a function that takes a string of numbers (possibly with an X at the end) and...

1.  Return `"Invalid"` if it is not a valid ISBN-10 or ISBN-13.
2.  Return `"Valid"` if it is a valid ISBN-13.
3.  If it is a valid ISBN-10, convert it into an ISBN-13 and return the ISBN-13 number.

Convert a valid ISBN-10 to ISBN-13 by tacking 978 to the start, then changing the last digit (the check digit) so that the resulting number passes the ISBN-13 check.

### Solution

Language: **TypeScript**
Works on: **Windows** and **Linux (Debian)**
Prerequisite: **Node.js** is installed in the system
To run the code use the following commands in order.
Install dependencies (Mocha and TypeScript)
`npm install`
To run the solution file use:
`npm run start`
To run tests
`npm run test`
**Note:**
The TypeScript files will transpile .ts files to .js files.
