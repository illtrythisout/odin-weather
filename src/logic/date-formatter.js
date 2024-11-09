export { formatDate };

// readable names for month and weekdays
const months = {
  short: {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  },
  long: {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  },
};
const weekDays = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

// logic
function formatDate(monthLength, daysInTheFuture = 0, date = new Date()) {
  const weekDay = date.getDay();
  const weekDayName = weekDays[weekDay];
  const day = date.getDate() + daysInTheFuture;
  const month = date.getMonth();
  const monthName = months[monthLength][month];

  const formattedDate = weekDayName + ', ' + day + ' ' + monthName;

  return formattedDate;
}
