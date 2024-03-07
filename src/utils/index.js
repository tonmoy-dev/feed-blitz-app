const getDateDifferenceFromNow = (fromDate) => {
  let differenceTime = new Date().getTime() - new Date(fromDate).getTime();

  // to get millisecond to second
  let secondDiffernce = differenceTime / 1000;

  let hourDifference = Math.floor(secondDiffernce / 3600);
  secondDiffernce -= hourDifference * 3600;

  let minuteDifference = Math.floor(secondDiffernce / 60);
  secondDiffernce -= minuteDifference * 60;

  let message;

  if (hourDifference > 0) {
    message = `${hourDifference} hour`;
  }

  if (minuteDifference > 0) {
    message = message
      ? `${message} ${minuteDifference} minutes`
      : `${minuteDifference} minutes`;
  }

  if (secondDiffernce) {
    message = message
      ? `${message} ${Math.round(secondDiffernce)} seconds`
      : `${Math.round(secondDiffernce)} seconds`;
  }

  return message;
};

export { getDateDifferenceFromNow };
