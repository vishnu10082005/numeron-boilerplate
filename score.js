// Iteration 5: Store the player score and display it on the game over screen
let score_box=document.getElementById("score-board")
let play_btn=document.getElementById("score-board")
let value=localStorage.getItem("score");
score_box.textContent=value;
window.open("./gameover.html","_self")
