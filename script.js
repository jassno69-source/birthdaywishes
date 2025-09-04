const cutCakeBtn = document.getElementById("cutCakeBtn");
const flame = document.getElementById("flame");
const dobText = document.getElementById("dobText");
const cutSound = document.getElementById("cutSound");
const knife = document.getElementById("knife");
const balloonContainer = document.getElementById("balloon-container");

cutCakeBtn.addEventListener("click", () => {
  // 🔥 Blow out flame
  flame.style.display = "none";

  // 🔪 Knife animation in
  knife.classList.add("cut");

  // 🎵 Play song
  cutSound.play();

  // 🔪 Remove knife after cut
  setTimeout(() => {
    knife.classList.remove("cut");
    knife.classList.add("knife-removed");
  }, 1200);

  // 🎉 Show DOB
  setTimeout(() => {
    dobText.style.display = "block";
  }, 1500);

  // 🎈 Release balloons
  for (let i = 0; i < 12; i++) {
    setTimeout(() => createBalloon(), i * 400);
  }
});

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = Math.random() * 90 + "vw";

  // Random glossy color
  const colors = ["#ff4d6d", "#ffaf40", "#00c2ff", "#8aff6c", "#ff66ff"];
  balloon.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);

  balloonContainer.appendChild(balloon);

  // Remove after animation
  setTimeout(() => {
    balloon.remove();
  }, 6000);
}
