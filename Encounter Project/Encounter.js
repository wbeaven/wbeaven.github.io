class Player {
  constructor(name, damage) {
    this.name = name;
    this.damage = damage;
  }
}
let newName;
let pDmg;

let players = [];
function addPlayer(newName, pDmg) {
  players.push(new Player(newName, pDmg));
}

nameHolder = document.getElementById("name-holder");
function setName() {
  newName = document.getElementById("player-name-input").value;
  pDmg = document.getElementById("player-damage-input").value;
  addPlayer(newName, pDmg);

  newDiv = document.createElement("div");
  newDiv.id = "newPlayer";
  nameHolder.appendChild(newDiv);
  newContent = document.createTextNode(`${newName}, ${pDmg} damage`);
  newDiv.appendChild(newContent);

  let newImg = document.createElement("img");
  newImg.src = "icon_cross.png";
  newImg.setAttribute("onclick", "deleteEntry(this)"); // why is the alert showing when i create a new player
  let src = document.getElementById("name-holder").getElementsByTagName("div")[
    players.length - 1
  ];
  src.appendChild(newImg);
}

function deleteEntry() {
  node.parentElement.style.display = "none";
  //   node.parentElement.
  //   players.slice(this.parentElement.getElementsByTagName("div")[this])
}

// function showContent() {
//   let temp = document.getElementsByTagName("template")[0];
//   let clon = temp.content.cloneNode(true);
//   nameHolder.appendChild(clon);
// }
// showContent();

// let img = document.createElement("img");
// img.src = "icon_cross.png";
// img.onclick = alert("Element deleted");
// let src = document.getElementById("newPlayer");
// src.appendChild(img);
let resultDiv = document.getElementById("results").appendChild();
