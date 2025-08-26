const moment = require("moment");

const getDateFilter = async (dateFilter) => {
  const currentDate = moment().startOf("day");
  switch (dateFilter) {
    case "yesterday":
      return {
        transactionDate: {
          $gte: moment(currentDate).subtract(1, "days").startOf("day").toDate(),
          $lte: moment(currentDate).subtract(1, "days").endOf("day").toDate(),
        },
      };
    case "thisWeek":
      return {
        transactionDate: {
          $gte: moment(currentDate).startOf("week").toDate(),
          $lte: moment(currentDate).endOf("day").toDate(),
        },
      };
    case "thisMonth":
      return {
        transactionDate: {
          $gte: moment(currentDate).startOf("month").toDate(),
          $lte: moment(currentDate).endOf("day").toDate(),
        },
      };
    case "thisYear":
      return {
        transactionDate: {
          $gte: moment(currentDate).startOf("year").toDate(),
          $lte: moment(currentDate).endOf("day").toDate(),
        },
      };
    default:
      return {
        transactionDate: {
          $gte: currentDate.toDate(),
          $lte: moment(currentDate).endOf("day").toDate(),
        },
      };
  }
};

const getMonthNumber = (monthName) => {
  const monthMap = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
  };

  if (!monthName || typeof monthName !== 'string') return null;

  return monthMap[monthName.toLowerCase()] || null;
};






module.exports = {
  getDateFilter,
  getMonthNumber
};
