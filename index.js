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

// Logic to Start Button
const start = document.getElementById("start");
start.addEventListener('click', () => {
  const gameMode = settings[0];
  const gameSize = settings[1];
  createGrid(gameMode, gameSize);
});

// Define function to update the grid
function createGrid(mode, size) {
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
    square.style.width = (container.offsetWidth / size) + "px";
    square.addEventListener("mouseover", () => {
      switch (mode) {
        case ("classic"):
          square.style.backgroundColor = "#a3a3a3";
          break;
        case ("random"):
          if(!square.style.backgroundColor) {
            square.style.backgroundColor = generateRandomColor();
          }
          break;
        case ("dark"):
          square.style.backgroundColor = "#000000";
          if (!square.style.opacity) {
            square.style.opacity = 0.1;
          } else if (square.style.opacity < 1) {
            square.style.opacity = Number(square.style.opacity) + 0.1;
          }
          break;
      }
    })
  });
}

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}