function filterDates(arr) {
  const filteredData = [];
  arr.forEach((date) => {
    const swapedDate = transformDateStringToArray(date);
    if (isValidDate(swapedDate)) {
      const [day, month, year] = swapedDate.split("-");
      const formattedDate = `${day < 10 ? "0" : ""}${Number(day)}-${
        month < 10 ? "0" : ""
      }${Number(month)}-${Number(year)}`;
      filteredData.push(formattedDate);
    }
  });
  return filteredData;
}

function isValidDate(dateString) {
  if (dateString == null) {
    return false;
  }

  let [day, month, year] = dateString.split("-");

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  const date = new Date().setFullYear(
    Number(year),
    Number(month - 1),
    Number(day)
  );
  const dateObject = new Date(date);
  const checkedDay = dateObject.getDate();
  const checkedMonth = dateObject.getMonth() + 1;
  const checkedYear = dateObject.getFullYear();
  return (
    Number(day) === checkedDay &&
    Number(month) === checkedMonth &&
    Number(year) === checkedYear
  );
}

function transformDateStringToArray(dateString) {
  let [month, day, year] = dateString.split("/");

  if (!year) {
    [day, month, year] = dateString.split("-");
  }

  if (!year) {
    return null;
  }

  return [day, month, year].join("-");
}

const stringArr = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2023",
  "3/1-04-2023",
  "04/31/2023",
  "31/31/2023",
  "1/1/1",
  "29-02-2023",
  "02/29/2023",
  "29-02-2024",
  "02/29/2024",
];

const filteredArr = filterDates(stringArr);
console.log(filteredArr);
