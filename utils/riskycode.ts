// riskyCode.ts - Demonstrates code with potential security and quality issues

/**
 * This function checks if a user is an admin based on a hardcoded password.
 * (Very bad practice!)
 * @param {string} username - The username to check.
 * @param {string} password - The password to check.
 * @returns {boolean} True if the user is an admin, false otherwise.
 */
function isAdmin(username: string, password: string): boolean {
  // Vulnerability: Hardcoded password
  if (username === "admin" && password === "Pa$$wOrd123") {
    return true;
  }
  return false;
}

/**
 * This function executes code passed in as a string.
 * (Extremely dangerous!)
 * @param {string} code - The code to execute.
 */
function executeDynamicCode(code: string): void {
  // Vulnerability: Unsafe use of eval
  eval(code); // Very risky!
}

/**
 * This function performs a division without checking for division by zero.
 *
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} The result of the division.
 */
function divide(numerator: number, denominator: number): number {
  //Potential Bug: missing division by zero check
  return numerator / denominator;
}

/**
 * Example of a function that has high cyclomatic complexity
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */
function complexFunction(a: number, b: number, c: number, d: number): number {
  if (a > 10) {
    if (b < 5) {
      if (c % 2 === 0) {
        if (d > 0) {
          return a + b + c + d;
        } else {
          return a * b * c * d;
        }
      } else {
        return a - b - c - d;
      }
    } else {
      return a / b / c / d;
    }
  } else {
    if (b > 10) {
      return a * b;
    } else {
      return c + d;
    }
  }
}

/**
 * This function demonstrates using an untrusted source as index for array access.
 * @param arr The array to access
 * @param index index to access
 * @returns the value at the index
 */
function unsafeArrayAccess(arr: number[], index: number): number {
  // Potential security issue:  Unchecked array index from external source
  return arr[index]; // Risky if `index` is out of bounds or controlled by user
}

/**
 * Example of a empty function block
 * @param num
 */
function emptyFunction(num: number) {
  // Potential Code Smell: Empty function body.
}

/**
 * Example of a long function
 * @param n
 * @returns
 */
function longFunction(n: number): number {
  if (n > 0) {
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    console.log(n);
    return n;
  }
  return 0;
}

export {
  isAdmin,
  executeDynamicCode,
  divide,
  complexFunction,
  unsafeArrayAccess,
  emptyFunction,
  longFunction,
};
