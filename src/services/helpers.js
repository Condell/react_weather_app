import moment from "moment";

const unixToDate = unixTime => {
  return moment(unixTime * 1000).format("dddd, MMMM Do");
};

export { unixToDate };
