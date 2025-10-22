// script.js

// -----------------------------
// 1. Navbar toggle for mobile
// -----------------------------
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

// -----------------------------
// 2. Smooth scroll for anchor links
// -----------------------------
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after clicking
    if (!navMenu.classList.contains("hidden")) {
      navMenu.classList.add("hidden");
    }
  });
});

// -----------------------------
// 3. Navbar shadow on scroll
// -----------------------------
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg", "bg-white", "transition-all");
  } else {
    navbar.classList.remove("shadow-lg", "bg-white", "transition-all");
  }
});
