// Change of game mode
const buttons = Array.from(document.getElementsByClassName("mode"));
buttons.forEach( (button) => {
  button.addEventListener( "click", (e) => {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute("id") === e.target.getAttribute("id")) {
        buttons[i].classList.add("selected");
      } else {
        buttons[i].classList.remove("selected");
      }
    }
  })
});


// Link between slider and paragraph field
const sliderSize = document.getElementById("size");

sliderSize.addEventListener("input", () => {
  let selectedGrid = document.getElementById("selected-grid");
  selectedGrid.textContent = `${sliderSize.value} X ${sliderSize.value}`;
});
