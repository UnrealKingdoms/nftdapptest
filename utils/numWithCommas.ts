export const numberWithCommas = (num: number): string => {
  // Use the built-in toLocaleString method with options for formatting
  if (num > 1000000) {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  }

  return num.toLocaleString(undefined, {
    minimumFractionDigits: 1, // Ensure at least 2 decimal places
    maximumFractionDigits: 4, // Ensure at most 2 decimal places
    useGrouping: true, // Add commas as thousand separators
  });
};
