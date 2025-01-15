# Unhandled Promise Rejection in Node.js

This repository demonstrates an example of an unhandled promise rejection in Node.js and how to handle it.  Unhandled promise rejections can lead to unexpected behavior in your application. It is crucial to always handle promise rejections to ensure stability.

## Bug

The `bug.js` file contains a Node.js server that does not handle promise rejections properly. This can result in an unhandled promise rejection if any asynchronous operation within the server fails.

## Solution

The `bugSolution.js` file provides a corrected version of the server that handles promise rejections using `.catch()`. This prevents unhandled rejections from crashing the server or causing unexpected behavior.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the unhandled rejection.
4. Run `node bugSolution.js` to see the solution that properly handles the promise rejection.