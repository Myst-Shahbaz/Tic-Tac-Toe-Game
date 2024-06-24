let allboxes = document.querySelectorAll(".box");
let resetgamebtn = document.querySelector(".resetgamebtn");
let newgamebtn = document.querySelector(".newgamebtn");
let winnermsg = document.querySelector(".winnermsg");
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

allboxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked!");
    if (player1) {
      box.innerText = "X";
      player1 = false;
    } else {
      box.innerText = "0";
      player1 = true;
    }
    box.disabled = true;
    // checkwinner();
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
  winnermsg.classList.remove("hide");
};
