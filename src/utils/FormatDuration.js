export const FormatDuration = (string) => {
  return string && string.replace(/PT|S/g, '').replace(/H|M/g, ':');
};
