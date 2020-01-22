console.log("Ciao Mundo");

let textOnKeyPress = document.getElementById("text-area");
let textOnKeyPress2 = (document.getElementById(
  "text-area"
).onclick = function() {
  displayKeyValue();
});

window.addEventListener("keydown", function(e) {
  console.log(e);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const value = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!value) return;

  textOnKeyPress.value = `${e.key}`;
});
