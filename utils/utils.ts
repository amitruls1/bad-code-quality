// /Users/amitchauh4n/projects/bad-code-quality/utils/utils.ts
// Intentionally Bad Code for SonarQube Failure

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
  // Code smell: Redundant conditional - can be simplified
  if (typeof num !== "number") {
    throw new Error("Input must be a number.");
  }
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
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

  //Code Smell: Unnecessary variable reassignment
  let formattedString = template;
  for (let i = 0; i < values.length; i++) {
    formattedString = template.replace("{}", values[i]); //bug: replace not being assigned to formattedString
    template = formattedString; //code smell: uncessary reassignment
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
  console.log("Sum:", add(5, 3));
  console.log("Is 4 even?", isEven(4));
  console.log(
    "Formatted:",
    formatString("Hello, {}! You have {} messages.", ["User", "10"])
  );
  console.log("Range:", range(1, 5));
  // Removed the bad code examples
} catch (error: any) {
  console.error("Error:", error.message);
}

// Code smell: Unused variable
const unusedVariable = "I'm never used";

export { add, isEven, range, formatString };
