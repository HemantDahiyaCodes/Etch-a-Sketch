"use strict";

const createGrid = () => {
  const gridContainer = document.querySelector(".grid-container");
  const size = +prompt("Enter the size of the grid");
  if (size > 100) {
    createGrid();
    return;
  }
  // Creating rows
  for (let i = 1; i <= size; i++) {
    const gridRows = document.createElement("div");
    gridRows.className = "row";
    gridContainer.appendChild(gridRows);
  }

  // Creating columns
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 1; i <= size; i++) {
      const gridCols = document.createElement("div");
      gridCols.className = "column";
      gridCols.style.flexBasis = `${100 / size}%`;
      gridCols.addEventListener("mouseover", () => {
        gridCols.style.backgroundColor = "blue";
      })
      gridCols.addEventListener("click", () => {
        gridCols.style.backgroundColor = "blue";
      })
      row.appendChild(gridCols);
    }
  });
};

createGrid();