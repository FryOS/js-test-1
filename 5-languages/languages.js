const answer = prompt(
  "На каком языке вы хотите услышвать перевод фразы Привет мир. Введите de или ru, или en"
);

if (answer) {
  switch (answer) {
    case "ru":
      alert("Привет мир");
      break;
    case "en":
      alert("Hello world");
      break;
    case "de":
      alert("Hallo Welt");
      break;
    default:
      alert("Что-то вы ввели не то");
  }
} else {
  alert("Вы не ввели язык. Пустая строчка");
}
