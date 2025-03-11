const elements = document.querySelectorAll(".animate");
// fadein animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInDown2");
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach((element) => {
  observer.observe(element);
});

// JavaScript for Lightbox & Filtering -->
const portfolioItems = document.querySelectorAll(".portfolio-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");
const filterButtons = document.querySelectorAll(".filter-btn");

// Lightbox Functionality
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightboxImg.src = item.src;
    lightbox.classList.remove("hidden");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.add("hidden");
  }
});

// Filtering Functionality
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Dark light toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelectorAll(".themeToggle");
  const htmlElement = document.getElementById("html");
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");
  const sunIcon2 = document.querySelector(".sun2");
  const moonIcon2 = document.querySelector(".moon2");

  // Ensure localStorage has a value
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light"); // Default to light mode
  }

  // Apply the theme based on localStorage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    moonIcon2.classList.add("hidden");
    sunIcon2.classList.remove("hidden");
  } else {
    htmlElement.classList.remove("dark");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    sunIcon2.classList.add("hidden");
    moonIcon2.classList.remove("hidden");
  }

  // Toggle theme on click
  themeToggle.forEach((item) => {
    item.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");
      if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        moonIcon2.classList.add("hidden");
        sunIcon2.classList.remove("hidden");
      } else {
        localStorage.setItem("theme", "light");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        sunIcon2.classList.add("hidden");
        moonIcon2.classList.remove("hidden");
      }
    });
  });
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("hidden");
  offScreenMenu.classList.add("flex");
});
