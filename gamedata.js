let allboxes = document.querySelectorAll(".box");
let resetgamebtn = document.querySelector(".resetgamebtn");
let newgamebtn = document.querySelector(".newgamebtn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let player1 = true;

const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

allboxes.forEach((b) => {
  b.addEventListener("click", () => {
    if (player1) {
      b.innerText = "X";
      player1 = false;
    } else {
      b.innerText = "0";
      player1 = true;
    }
    b.disabled = true;
  });
});

const checkwinner = () => {
  for (const winner of winpattern) {
    let position1 = allboxes[winner[0]].innerText;
    let position2 = allboxes[winner[1]].innerText;
    let position3 = allboxes[winner[2]].innerText;
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        console.log(`Congratulation ${position1} is the Winner!`);
        showwinner(position1);
      }
    }
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulation ${winner} is the Winner!`;
  msg_container.classList.remove("hide");
  disabledboxes();
};

const disabledboxes = () => {
  for (const box of allboxes) {
    box.disabled = true;
  }
};

const resetgame = () => {
  player1 = true;
  msg_container.classList.add("hide");
  enabled();
};

const enabled = () => {
  for (const box of allboxes) {
    box.disbled = false;
    box.innerText = "";
  }
};

newgamebtn.addEventListener("click", resetgame);
resetgamebtn.addEventListener("click", resetgame);
