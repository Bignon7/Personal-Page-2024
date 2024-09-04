const numberOfCircles = 30;
const background = document.getElementById("background");
const triggerButton = document.getElementById("triggerButton");
const card = document.getElementById("card");
const closeButton = document.getElementById("closeButton");
const contents = document.querySelectorAll(".card-content");

for (let i = 0; i < numberOfCircles; i++) {
  const circle = document.createElement("div");
  const size = Math.random() * 100 + 50;
  const positionX = Math.random() * window.innerWidth;
  const positionY = Math.random() * window.innerHeight;
  const duration = Math.random() * 5 + 5;

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${positionX}px`;
  circle.style.top = `${positionY}px`;
  circle.style.animationDuration = `${duration}s`;

  background.appendChild(circle);
}

triggerButton.addEventListener("click", () => {
  card.classList.add("show");
  triggerButton.style.display = "none";
  setTimeout(() => {
    contents.forEach((content, index) => {
      setTimeout(() => {
        content.classList.add("show");
      }, index * 300);
    });
  }, 500);
});

closeButton.addEventListener("click", () => {
  card.classList.remove("show");
  contents.forEach((content) => content.classList.remove("show"));
  setTimeout(() => {
    triggerButton.style.display = "block";
  }, 500);
});
// Modal functionality
const profileImage = document.getElementById("profileImage");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.querySelector(".modal .close");

profileImage.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = profileImage.src;
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Typing effect
const textDisplay = document.getElementById("textDisplay");
const phrases = [
  "Hi, I'm an actor.",
  "I'm a model.",
  "Welcome to my profile page.",
];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (!isDeleting) {
    textDisplay.innerHTML =
      currentPhrase.substring(0, currentLetterIndex + 1) +
      "<span class='cursor'></span>";
    currentLetterIndex++;
    if (currentLetterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    textDisplay.innerHTML =
      currentPhrase.substring(0, currentLetterIndex - 1) +
      "<span class='cursor'></span>";
    currentLetterIndex--;
    if (currentLetterIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}

type();

document.addEventListener("click", function (event) {
  const circle_effect = document.createElement("div");
  circle_effect.className = "circle_effect";

  circle_effect.style.left = `${event.pageX - 50}px`; // Ajuster pour centrer le cercle
  circle_effect.style.top = `${event.pageY - 50}px`; // Ajuster pour centrer le cercle

  document.body.appendChild(circle_effect);

  circle_effect.addEventListener("animationend", function () {
    document.body.removeChild(circle_effect);
  });
});
