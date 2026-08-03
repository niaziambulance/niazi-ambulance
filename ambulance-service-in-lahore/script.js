// ==============================
// Mianwali Ambulance Service
// Lahore Landing Page Script
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  // Mobile Menu
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
  }

  // Close menu after clicking a link
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener("click", () => {
      if (mainNav) mainNav.classList.remove("active");
      if (navToggle) navToggle.classList.remove("active");
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });
    // ==============================
  // Reveal Animation
  // ==============================

  const revealElements = document.querySelectorAll(
    ".card, .route-card, .faq-item, .contact-card, figure"
  );

  function revealOnScroll() {

    revealElements.forEach((item) => {

      const windowHeight = window.innerHeight;
      const top = item.getBoundingClientRect().top;

      if (top < windowHeight - 80) {

        item.classList.add("show");

      } else {

        item.classList.remove("show");

      }

    });

  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ==============================
  // Header Shadow
  // ==============================

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

      header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

      header.style.boxShadow = "none";

    }

  });

  // ==============================
  // Floating Buttons
  // ==============================

  const floating = document.querySelector(".fixed-contact");

  window.addEventListener("scroll", () => {

    if (!floating) return;

    floating.style.opacity = window.scrollY > 100 ? "1" : "0.9";

  });
    // ==============================
  // FAQ Toggle
  // ==============================

  document.querySelectorAll(".faq-item h3").forEach((question) => {

    question.addEventListener("click", () => {

      const item = question.parentElement;

      item.classList.toggle("active");

    });

  });

  // ==============================
  // Active Navigation
  // ==============================

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  function activeMenu() {

    let current = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }

    });

    navLinks.forEach((link) => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }

    });

  }

  window.addEventListener("scroll", activeMenu);
  activeMenu();

  // ==============================
  // Console Message
  // ==============================

  console.log("✅ Mianwali Ambulance Service - Lahore Page Loaded Successfully");

}); // DOMContentLoaded END
