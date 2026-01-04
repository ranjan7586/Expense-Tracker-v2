export const ucfirst = (str: string) => {
  if (!str) return str; // Handle empty strings, null, or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
};
