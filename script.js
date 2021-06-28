"use strict";

//menu icons
const rangedButton = document.querySelector(".menuRangedActive");
const mageButton = document.querySelector(".menuMageActive");
const menuMage = document.querySelector(".menuMage");
const menuRanged = document.querySelector(".menuRanged");

//score
const playerScore = document.querySelector(".player-current-score");

//prayer icons
const magePrayer = document.querySelector(".magePrayer");
const rangedPrayer = document.querySelector(".rangedPrayer");

//video
const jadRanged = document.querySelector(".ranged");
const jadMage = document.querySelector(".mage");
const jadStill = document.querySelector(".still");

//audio
const mageAudio = document.querySelector(".mageAudio");
const rangedAudio = document.querySelector(".rangedAudio");

//fixing video
jadMage.classList.toggle("hidden");
jadRanged.controls = false;
jadMage.controls = false;

//turning off one prayer
mageButton.classList.toggle("hidden");
magePrayer.classList.toggle("hidden");

let currentAttack = "";
let survivedHits = 0;

//hiding damage
damage.classList.toggle("hidden");

const hitResult = () => {
  if (currentAttack === "mage" && rangedPrayer.classList.contains("hidden")) {
    //if mage attack and successful
    //console.log("YOU'RE WINNER");
    survivedHits += 1;
    playerScore.textContent = survivedHits;
  } else if (
    //else if ranged attack and successful
    currentAttack === "ranged" &&
    magePrayer.classList.contains("hidden")
  ) {
    //console.log("YOU DID IT");
    survivedHits += 1;
    playerScore.textContent = survivedHits;
  } else {
    //unsuccesful result
    console.log("YOU LOOOOOOOOOSE");
    clearInterval(attackLoop);
    playerScore.textContent = "YOU LOOOOOOOOOOOOOOOSE";
    menuMage.removeEventListener("click", prayerToggle);
    menuRanged.removeEventListener("click", prayerToggle);
    damage.classList.toggle("hidden");
  }
};

const prayerToggle = function () {
  mageButton.classList.toggle("hidden");
  rangedButton.classList.toggle("hidden");
  magePrayer.classList.toggle("hidden");
  rangedPrayer.classList.toggle("hidden");
};

menuMage.addEventListener("click", prayerToggle);
menuRanged.addEventListener("click", prayerToggle);

const mageAttack = () => {
  jadMage.currentTime = 0;
  currentAttack = "mage";
  if (jadMage.classList.contains("hidden")) jadMage.classList.remove("hidden");

  if (!jadRanged.classList.contains("hidden")) {
    jadRanged.classList.add("hidden");
  }

  mageAudio.currentTime = 0;
  mageAudio.play();
  setTimeout(hitResult, 3000);
};

const rangedAttack = () => {
  jadRanged.currentTime = 0;
  currentAttack = "ranged";
  if (jadRanged.classList.contains("hidden"))
    jadRanged.classList.remove("hidden");

  if (!jadMage.classList.contains("hidden")) {
    jadMage.classList.add("hidden");
  }
  rangedAudio.currentTime = 0;
  rangedAudio.play();
  setTimeout(hitResult, 3000);
};

const rollAttack = () => {
  let jadRoll = Math.floor(Math.random() * 2);
  console.log(jadRoll);
  if (jadRoll === 1) {
    mageAttack();
  }
  if (jadRoll === 0) {
    rangedAttack();
  }
};
// make a start button
//

const attackLoop = window.setInterval(rollAttack, 4800);

//mage is always on top, toggle it off to switch to ranged, doing it this way because mage has a longer tail than ranged

// figure out some lose state
//then you're done I think

//so, to fix the video not working on firefox, make just one video and set the time to the frame you need to start the next move.
