// Tab Navigation (Experience section)
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

if (tabs.length && contents.length) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.target;
      const tabPanel = document.getElementById(target);
      if (tabPanel) tabPanel.classList.add("active");

      // Optional: Scroll into view on mobile for better UX
      if (window.innerWidth < 768) {
        setTimeout(() => {
          tabPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    });
  });
}

// Hamburger Menu (Mobile Navigation)
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close");

if (hamburger && navMenu && closeBtn) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.add("active");
    document.body.classList.add("hidden"); // Prevent background scroll
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("hidden");
  });

  // Optional: Close menu when clicking outside
  window.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navMenu.classList.remove("active");
      document.body.classList.remove("hidden");
    }
  });
}

// Typewriter Animation for Hero Section
const words = ["developer", "designer", "creator", "problem solver"];
let i = 0,
  j = 0,
  currentWord = "",
  isDeleting = false;

function typeEffect() {
  const textDisplay = document.getElementById("dynamic-text");
  if (!textDisplay) return; // Exit if element not found
  currentWord = words[i];

  if (!isDeleting && j <= currentWord.length) {
    textDisplay.textContent = currentWord.substring(0, j++);
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j >= 0) {
    textDisplay.textContent = currentWord.substring(0, j--);
    setTimeout(typeEffect, 100);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(typeEffect, 200);
    }
  }
}
typeEffect();