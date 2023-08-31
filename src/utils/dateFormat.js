export const formatDateIntoString = (date) => {
  const currDate = new Date(date);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const outputDate = currDate.toLocaleDateString("en-US", options);
  return outputDate;
};
