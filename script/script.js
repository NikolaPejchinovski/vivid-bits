document.addEventListener("DOMContentLoaded", function () {
  const movingText = document.querySelector(".moving-text h1");
  const headerBackground = document.getElementById("header-background");
  particlesJS.load("particles-js", "script/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  particlesJS.load("particles-js2", "script/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Event listener for header opacity change on scroll
  document.addEventListener("scroll", handleHeaderOpacity);

  function handleHeaderOpacity() {
    const y = window.scrollY;
    const opacity = map(y, 400, 800, 0, 1);
    headerBackground.style.opacity = y > 400 ? opacity : 0;
  }

  // Update moving text position
  function updatePosition() {
    var viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const position = movingText.getBoundingClientRect().x;
    let backgroundPositionX = -position - 100;
    if (viewportWidth < 768) {
      backgroundPositionX = -position - 500;
    }
    movingText.style.backgroundPosition = `${backgroundPositionX}px 0`;
    requestAnimationFrame(updatePosition);
  }

  requestAnimationFrame(updatePosition);
});

// Utility function for mapping values
const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
