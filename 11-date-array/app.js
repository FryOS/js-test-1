function filterDates(arr) {
    return arr.filter(str => {
      const parts = str.split(/[./-]/); // разбиваем строку на массив частей по разделителям даты: "-", "/" или "."
      if (parts.length !== 3) { // проверяем количество элементов в массиве
        return false;
      }
      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const year = parseInt(parts[2]);
      if (isNaN(day) || isNaN(month) || isNaN(year)) { // проверяем, что все три части даты являются числами
        return false;
      }
      if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) { // проверяем корректность значений
        return false;
      }
      const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`; // форматируем дату в нужный вид
      return formattedDate;
    }).map(str => str.replace(/\//g, '-')); // заменяем все вхождения "/" на "-"
  }
  
  const stringArr = ["10-02-2022", "тест", "11/12/2023", "00/13/2023"];
  const filteredArr = filterDates(stringArr);
  console.log(filteredArr); // ["10-02-2022", "11-12-2023"]
  