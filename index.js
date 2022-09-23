//clicked tiles removed in the order that it was first clicked
//classic example of first in first out (fifo)
let clickedItem = [];

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tile")) return;
  if (clickedItem.includes(e.target)) return;
  e.target.classList.add("selected");
  clickedItem.push(e.target);
  if (clickedItem.length >= 9) {
    const interval = setInterval(() => {
      const tile = clickedItem.shift();
      tile.classList.remove("selected");
      if (clickedItem.length === 0) {
        clearInterval(interval);
      }
    }, 500);
  }
});
