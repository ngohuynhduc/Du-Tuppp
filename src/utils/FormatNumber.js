export const FormatNumber = (number) => {
  return number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
