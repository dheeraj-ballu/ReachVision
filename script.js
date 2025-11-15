// ===== Mobile Menu =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// ===== Contact Form =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/YOUR_ENDPOINT", {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      alert("Thank you for contacting Reach Vision X! We’ll get back to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  });
});


// ===== Scroll Animation =====
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fadeEl => appearOnScroll.observe(fadeEl));

// ===== Dark/Light Mode =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkMode = document.body.classList.contains('dark');
  themeToggle.textContent = darkMode ? '☀️' : '🌙';
});
// ===== Animated Typing Effect =====
const typingText = document.getElementById("typing-text");
const words = ["Build Brands", "Create Impact", "Reach Audiences", "Inspire Vision"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let delay = 100;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!deleting && charIndex < currentWord.length) {
    typingText.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, delay);
  } else if (deleting && charIndex > 0) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeEffect, delay / 2);
  } else {
    deleting = !deleting;
    if (!deleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ===== Parallax Scrolling Effect =====
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const scrollY = window.scrollY;
  hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
});
// ===== Preloader =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1000); // preloader duration (in ms)
});

