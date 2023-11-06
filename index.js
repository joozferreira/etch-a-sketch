// Link between slider and paragraph field
const sliderSize = document.getElementById("size");

sliderSize.addEventListener('input', () => {
  let selectedGrid = document.getElementById("selected-grid");
  selectedGrid.textContent = `${sliderSize.value} X ${sliderSize.value}`;
});
