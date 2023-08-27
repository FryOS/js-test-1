const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");
const text = document.querySelector(".text");

let counter = 0;

wrapper.addEventListener("click", function (e) {  
    if (e.target.classList.contains("button")) {
      e.target.textContent = "нажата";
    }
    counter++;
    text.textContent = counter;
});
