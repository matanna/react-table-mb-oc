/**
 * It takes a date string and returns a formatted date string
 * @param date - The date to format.
 * @returns A string that represents the date in the format of "mm/dd/yyyy"
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString(navigator.language, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
