// =========================
// TYPEWRITER EFFECT
// =========================

const texts = [
  "Medical Physics",
  "AI for Medicine",
  "Nuclear Medicine Dosimetry"
];

let speed = 100;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {

  if (charIndex < texts[textIndex].length) {

    textElements.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  } else {

    setTimeout(eraseText, 1500);

  }
}

function eraseText() {

  if (textElements.innerHTML.length > 0) {

    textElements.innerHTML =
      textElements.innerHTML.slice(0, -1);

    setTimeout(eraseText, 50);

  } else {

    textIndex = (textIndex + 1) % texts.length;

    charIndex = 0;

    setTimeout(typeWriter, 500);

  }
}

// START TYPEWRITER
window.onload = typeWriter;


// =========================
// STICKY NAVBAR EFFECT
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    nav.style.background = "rgba(0,0,0,0.95)";
    nav.style.boxShadow = "0 0 20px rgba(183,75,75,0.3)";

  } else {

    nav.style.background = "rgba(0,0,0,0.8)";
    nav.style.boxShadow = "none";

  }

});


// =========================
// MOBILE MENU
// =========================

const hamburg = document.querySelector(".hamburg");
const links = document.querySelector(".links");

hamburg.addEventListener("click", () => {

  links.classList.toggle("active");

});


// =========================
// CLOSE MOBILE MENU
// AFTER CLICKING LINK
// =========================

const navLinks = document.querySelectorAll(".links a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    links.classList.remove("active");

  });

});


// =========================
// ACTIVE NAVBAR LINK
// =========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(a => {

    a.classList.remove("active-link");

    if (a.getAttribute("href").includes(current)) {

      a.classList.add("active-link");

    }

  });

});


// =========================
// BUTTON ANIMATION
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});


// =========================
// PARTICLE BACKGROUND EFFECT
// OPTIONAL SIMPLE EFFECT
// =========================

const body = document.querySelector("body");

for (let i = 0; i < 25; i++) {

  const particle = document.createElement("span");

  particle.classList.add("particle");

  particle.style.left = Math.random() * window.innerWidth + "px";

  particle.style.top = Math.random() * window.innerHeight + "px";

  particle.style.animationDuration =
    Math.random() * 10 + 5 + "s";

  body.appendChild(particle);

}


// =========================
// SCROLL REVEAL EFFECT
// =========================

window.addEventListener("scroll", reveal);

function reveal() {

  const reveals = document.querySelectorAll(".box, .edu-item");

  for (let i = 0; i < reveals.length; i++) {

    const windowHeight = window.innerHeight;

    const revealTop = reveals[i].getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {

      reveals[i].classList.add("show");

    }

  }
}

reveal();


// =========================
// CONSOLE MESSAGE
// =========================

console.log(`
==========================================
 Annisa Rachman Portfolio Website
 Medical Physics | AI | Nuclear Medicine
==========================================
`);