document.addEventListener("DOMContentLoaded", function () {
  const headerBackground = document.getElementById("header-background");
  const copyrightYear = document.querySelector(".copyright-year");
  const startElevating = document.querySelectorAll(".maximize-potential");
  const contactContainer = document.querySelector(".contact-container");
  const contactForm = document.querySelector(".contact-form");
  const contactFormContainer = document.querySelectorAll(
    ".contact-form-container *"
  );
  const successMessage = document.getElementById("successMessage");
  const closeBtn = document.querySelector(".close");

  document.documentElement.style.overflowX = "hidden";
  // c136063d-0709-4cd2-8c8d-c46a329b956f

  // Contact Form Submit
  contactForm.addEventListener("submit", (e) => {
    submitForm(e);
  });

  // Function to submit the contact form
  function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    const subject = `Message from ${name.value}`;
    const body = `Name: ${name.value} <br/> Email: ${email.value} <br/> Subject: ${subject} <br/> Message: ${message.value}`;

    Email.send({
      SecureToken: "fd2cb210-f5d2-4ea5-9711-6b786350b6f1",
      To: "mangodudenikola@gmail.com",
      From: email.value,
      Subject: subject,
      Body: body,
    }).then(() => {
      displaySuccessMessage();
      clearFormFields();
    });
  }

  // Function to display the success message
  function displaySuccessMessage() {
    contactFormContainer.forEach((element) =>
      element.classList.add("invisible")
    );

    successMessage.style.display = "flex";

    setTimeout(() => {
      contactFormContainer.forEach((element) =>
        element.classList.remove("invisible")
      );
      successMessage.style.display = "none";
    }, 5000);
  }

  // Function to clear the form fields
  function clearFormFields() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    name.value = "";
    email.value = "";
    message.value = "";
  }

  // Open Contact Form

  startElevating.forEach((button) => {
    button.addEventListener("click", () => {
      contactContainer.classList.add("open");
    });
  });

  // Close Contact Form

  closeBtn.addEventListener("click", () => {
    contactContainer.classList.remove("open");
  });

  // Get and automatically update the copyright year
  loadCopyrightYear();

  // Testimonials Swipe Effect
  const swiper = new Swiper(".swiper", {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
  });

  // Load Particles
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
  const eventListener = "scroll";
  document.addEventListener(eventListener, handleHeaderOpacity);

  function handleHeaderOpacity() {
    const y = window.scrollY || window.pageYOffset;
    if (y === 0) headerBackground.style.opacity = 0;
    const opacity = map(y, 400, 800, 0, 1);
    headerBackground.style.opacity = y > 400 ? opacity : 0;
  }

  // Get and automatically update the copyright year
  function loadCopyrightYear() {
    const currentYear = new Date().getFullYear(); // Get current year
    copyrightYear.innerHTML = currentYear; // Update the year on screen(footer)
  }
});

// Utility function for mapping values
const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
