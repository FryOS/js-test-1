const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");
const text = document.querySelector(".text");

let counter = 0;

wrapper.addEventListener("click", function (event) {  
    if (event.target.classList.contains("button")) {
      event.target.textContent = "нажата";
    }
    counter++;
    text.textContent = counter;
});
