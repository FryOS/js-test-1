const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");
const text = document.querySelector(".text");

let counter = 0;

wrapper.addEventListener("click", function (e) {
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];    
    element.setAttribute("data-id", i);

    if (e.target.classList.contains("button")) {
      e.target.textContent = "нажата";
    }
  
  }
});

for (let button of buttons) {
  button.addEventListener('click', function() {
    counter++;
    text.textContent = counter;
  });
}
