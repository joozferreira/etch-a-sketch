// Global variable to define the settings of the game as an array
const settings = ['classic', 16];
const screen = document.getElementById("screen");

// Change of game mode
const buttons = Array.from(document.getElementsByClassName("mode"));
buttons.forEach( (button) => {
  button.addEventListener( "click", (e) => {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute("id") === e.target.getAttribute("id")) {
        buttons[i].classList.add("selected");
        settings[0] = buttons[i].getAttribute("id");
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
  settings[1] = sliderSize.value;
});

// Define function to update the grid
function createGrid(size) {
  // Clear current grid
  if (screen.lastElementChild !== null) {
    screen.removeChild(screen.lastElementChild);
  }

  // Create new grid
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  screen.appendChild(container);

  // Add squares to container
  for (let i = 0; i < Math.pow(size, 2); i++) {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "square");
    container.appendChild(gridSquare);
  }

  // Add width to squares and event listener
  const squares = document.getElementsByClassName("square");
  Array.from(squares).forEach( (square) => {
    square.style.width = (450 / size) + "px";
    square.addEventListener("hover", paintSquare(e));
  });
}

const start = document.getElementById("start");
start.addEventListener('click', () => {
  createGrid(settings[1]);
});