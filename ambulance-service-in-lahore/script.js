// ===============================
// Mianwali Ambulance Service
// Lahore Landing Page
// ===============================

// Mobile Menu
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });

      if (nav) nav.classList.remove("active");
      if (navToggle) navToggle.classList.remove("active");
    }
  });
});

// Reveal Animation
const reveals = document.querySelectorAll(".card, figure, .reveal");

function revealOnScroll() {

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const top = item.getBoundingClientRect().top;

    if (top < windowHeight - 80
