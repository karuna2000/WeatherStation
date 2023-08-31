export const formatTimeIntoLocalTime = (date) => {
    const currDate = new Date(date);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const localTimeFormatted = currDate.toLocaleTimeString('en-US', options);
    return localTimeFormatted;
  };


