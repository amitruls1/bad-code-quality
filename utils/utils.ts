// Example of code that can be used with code quality tools

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * @throws {Error} If either input is not a number.
 */
function add(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers.");
  }
  return a + b;
}

/**
 * Checks if a number is even.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 * @throws {Error} If the input is not a number.
 */
function isEven(num: number): boolean {
  if (typeof num !== "number") {
    throw new Error("Input must be a number.");
  }
  return num % 2 === 0;
}

/**
 * Formats a string with provided values.
 *
 * @param template - The string template.
 * @param values - The values to substitute into the template.
 * @returns The formatted string.
 * @throws {Error} If number of values is not equal to number of placeholders.
 */
function formatString(template: string, values: string[]): string {
  const placeholderCount = template.split("{}").length - 1;
  if (placeholderCount !== values.length) {
    throw new Error("Incorrect number of values provided for template.");
  }

  let formattedString = template;
  for (let i = 0; i < values.length; i++) {
    formattedString = formattedString.replace("{}", values[i]);
  }
  return formattedString;
}

/**
 * Generates an array of numbers from start to end (inclusive).
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number[]} An array of numbers from start to end.
 * @throws {Error} If start is greater than end, or if either input isn't a number
 */
function range(start: number, end: number): number[] {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("Inputs must be numbers.");
  }
  if (start > end) {
    throw new Error("Start must be less than or equal to end.");
  }
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

/**
 * Example usage of above functions:
 */
try {
  console.log("Sum:", add(5, 3)); // Output: Sum: 8
  console.log("Is 4 even?", isEven(4)); // Output: Is 4 even? true
  console.log(
    "Formatted:",
    formatString("Hello, {}! You have {} messages.", ["User", "10"])
  ); // Output: Formatted: Hello, User! You have 10 messages.
  console.log("Range:", range(1, 5)); // Output: Range: [1, 2, 3, 4, 5]
  //console.log("Bad", range(5,1)); // throws error Start must be less than or equal to end.
  //console.log("bad again", isEven("string")); // throws error: Input must be a number.
  //console.log("more bad", formatString("hello{}", ["1","2"])); // throws error Incorrect number of values provided for template.
} catch (error: any) {
  console.error("Error:", error.message);
}

export { add, isEven, range, formatString };
