const answer = prompt("Сколько будет 7 + или - 15?");

if(answer){
    switch (answer) {
        case "22": 
            alert("Успех")
          break
        case "-8": 
            alert("Успех")
          break
          case "Я не робот": 
            alert("Успех")
          break
          default:
            alert("Вы робот")
      }
}else {
  alert("Вы не ввели число")
}

