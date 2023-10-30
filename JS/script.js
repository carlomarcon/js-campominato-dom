const box = document.querySelector(".box");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const cellBomb = [];
// EVOCARE FUNZIONE

button.addEventListener("click", function () {
  box.style.display = "flex";
  h1.style.display = "none";

  const difficulty = document.querySelector("select").value;

  generator(difficulty);
  Listener(difficulty);
  numberBomb(16);
});

// FUNZIONI

function generator(numberofcell) {
  let insert = "";
  let classIn = "";
  if (numberofcell === "81") {
    classIn += "normal";
  } else if (numberofcell === "49") {
    classIn += "fuego";
  } else {
    classIn += "easy";
  }

  for (i = 1; i <= numberofcell; i++) {
    insert += "<div class='cell " + classIn + "'>" + i + "</div>";
  }

  box.innerHTML = insert;
}

function Listener(numberofcell) {
  let cell = document.querySelectorAll(".cell");
  for (i = 1; i < numberofcell; i++) {
    cell[i].addEventListener("click", function () {
      this.style.backgroundColor = "blue";
      console.log(this.innerHTML);
    });
  }
}

// numberBomb(16, 1);
// console.log(cellBomb);

function numberBomb(numberRandom) {
  // let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);

  while (cellBomb.length < numberRandom) {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    if (cellBomb.includes(randomNumber) === false) {
      cellBomb.push(randomNumber);
    }
  }
}

// let test = (document.createElement("h1").innerHTML = "hey");

// let cell = document.querySelector(".box");
// cell.append(test);
