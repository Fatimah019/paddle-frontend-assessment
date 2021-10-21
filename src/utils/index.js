import moment from "moment";

// date format
export const getFormattedDate = (date, format = "MMM DD, YYYY") =>
  moment(date).format(format);
