/**
 * Validates if a value is a string and within a specified maximum length.
 * @param {unknown} value - The value to be validated.
 * @param {number} maxLength - The maximum allowed length for the string.
 * @returns {boolean} True if the value is a valid string within the specified length, false otherwise.
 */
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

/**
 * Extracts and returns an error message from various error types.
 * @param {unknown} error - The error object or value to process.
 * @returns {string} A string representation of the error message.
 */
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
