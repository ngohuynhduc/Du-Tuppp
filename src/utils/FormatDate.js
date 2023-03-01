export const FormatDate = (date) => {
  const formatDate = new Date(date);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = formatDate.getFullYear();
  const month = formatDate.getMonth();
  const day = formatDate.getDate();

  return `${months[month]} ${day}, ${year}`;
};
