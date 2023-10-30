const box = document.querySelector(".box");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const cellBomb = [];
const bombClicked = [];
const Points = [];
const h2 = document.querySelector("h2");
const Wrapper = document.querySelector(".wrapper");

// EVOCARE FUNZIONE

button.addEventListener("click", function () {
  box.style.display = "flex";
  h1.style.display = "none";
  h2.style.display = "inline-block";

  const difficulty = document.querySelector("select").value;

  generator(difficulty);
  Listener(difficulty);
  numberBomb(4);
  console.log(cellBomb);
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

  for (i = 0; i < numberofcell; i++) {
    cell[i].addEventListener("click", function () {
      if (bombClicked.length === cellBomb.length - 1) {
        for (let j = 0; j < cellBomb.length; j++) {
          cell[cellBomb[j] - 1].style.backgroundColor = "red";
        }
        button.addEventListener("click", function () {
          location.reload();
        });
      } else if (
        cellBomb.includes(parseInt(this.innerHTML)) === false &&
        bombClicked.length < cellBomb.length
      ) {
        this.style.backgroundColor = "blue";
        Points.push(parseInt(this.innerHTML));
      } else if (
        cellBomb.includes(parseInt(this.innerHTML)) === true &&
        bombClicked.length < cellBomb.length
      ) {
        this.style.backgroundColor = "red";
        bombClicked.push(parseInt(this.innerHTML));
        console.log(bombClicked);
      }
      document.querySelector("h2").innerHTML =
        `Il tuo punteggio è di ` + Points.length + ` su 100.`;
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
