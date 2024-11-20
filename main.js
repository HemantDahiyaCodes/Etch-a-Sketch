"use strict";
const getSize = document.getElementById("create-grid");
const gridSize = document.getElementById("size");

const createGrid = () => {
  const gridContainer = document.querySelector(".grid-container");

  // Clearing the exisitng grid
  gridContainer.innerHTML = "";
  // getting and setting the size of the grid.
  function Size() {
    const size = parseFloat(gridSize.value);

    if (gridSize.value > 60) {
      alert("Please enter a value less than 60!");
      return;
    }
    
    return size;
  }

  // Creating rows
  for (let i = 1; i <= Size(); i++) {
    const gridRows = document.createElement("div");
    gridRows.className = "row";
    gridContainer.appendChild(gridRows);
  }

  // Random Colors
  // Red value
  const red = () => {
    const redColor = Math.floor(Math.random() * 255);
    return redColor;
  };

  // Green value
  const green = () => {
    const greenColor = Math.floor(Math.random() * 255);
    return greenColor;
  };

  // Blue value
  const blue = () => {
    const blueColor = Math.floor(Math.random() * 255);
    return blueColor;
  };

  // Creating columns
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 1; i <= Size(); i++) {
      const gridCols = document.createElement("div");
      gridCols.className = "column";
      gridCols.style.flexBasis = `${100 / Size()}%`;
      gridCols.addEventListener("mouseover", () => {
        gridCols.style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`;
      });
      gridCols.addEventListener("click", () => {
        gridCols.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      });
      row.appendChild(gridCols);
    }
  });
};

getSize.addEventListener("click", createGrid);

// making the program work by hitting the enter on keyboard
const handleClick = (event) => {
  if(event.key === "Enter") {
    createGrid();
  }
}

gridSize.addEventListener("keydown", handleClick)