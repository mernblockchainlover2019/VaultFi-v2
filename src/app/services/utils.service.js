  export function formatNumberWithCommas(number) {
    // Convert the number to a string with commas as thousand separators
    return number.toLocaleString('en-US');
  }

  export function convertSecondsToDate (seconds) {
    // console.log("seconds: ", seconds);
    const date = new Date(seconds * 1000); // Convert seconds to milliseconds
    // console.log("date: ",date.toISOString());
    return date.toISOString(); // Convert date to ISO 8601 string format
  };
