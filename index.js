let homeScore = 0,
  guestScore = 0;
const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");

export function reset() {
  homeScoreDisplay.textContent = homeScore;
  guestScoreDisplay.textContent = guestScore;
  homeScoreDisplay.classList.remove("leading");
  guestScoreDisplay.classList.remove("leading");
}
reset();

export function addScore(score, el) {
  if (el.parentNode.parentNode.id === "home") {
    homeScoreDisplay.textContent = +homeScoreDisplay.textContent + score;
  } else {
    guestScoreDisplay.textContent = +guestScoreDisplay.textContent + score;
  }

  if (+homeScoreDisplay.textContent > +guestScoreDisplay.textContent) {
    homeScoreDisplay.classList.add("leading");
    guestScoreDisplay.classList.remove("leading");
  } else if (+homeScoreDisplay.textContent < +guestScoreDisplay.textContent) {
    homeScoreDisplay.classList.remove("leading");
    guestScoreDisplay.classList.add("leading");
  } else if (+homeScoreDisplay.textContent === +guestScoreDisplay.textContent) {
    homeScoreDisplay.classList.remove("leading");
    guestScoreDisplay.classList.remove("leading");
  }
}

window.addScore = addScore;
window.reset = reset;
