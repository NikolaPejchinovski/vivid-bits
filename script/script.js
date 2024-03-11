document.addEventListener("DOMContentLoaded", function () {
  const headerBackground = document.getElementById("header-background");
  const copyrightYear = document.querySelector(".copyright-year");
  const getStarted = document.querySelector(".get-started-btn");
  const startElevating = document.querySelectorAll(".maximize-potential");
  const contactContainer = document.querySelector(".contact-container");
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.getElementById("successMessage");
  const closeBtn = document.querySelector(".close");

  // Disable horizontal scrolling
  document.documentElement.style.overflowX = "hidden";

  // Contact Form Submit
  contactForm.addEventListener("submit", submitForm);

  // Function to submit the contact form
  function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
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
    const contactFormContainer = document.querySelector(
      ".contact-form-container"
    );

    contactFormContainer.classList.add("invisible");
    successMessage.style.display = "flex";

    setTimeout(() => {
      contactFormContainer.classList.remove("invisible");
      successMessage.style.display = "none";
    }, 3000);
  }

  // Function to clear the form fields
  function clearFormFields() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    name.value = "";
    email.value = "";
    message.value = "";
  }

  // Open Contact Form
  getStarted.addEventListener("click", () => {
    contactContainer.classList.add("open");
    document.documentElement.style.overflow = "hidden";
  });

  startElevating.forEach((button) => {
    button.addEventListener("click", () => {
      contactContainer.classList.add("open");
      document.documentElement.style.overflow = "hidden";
    });
  });

  // Close Contact Form
  closeBtn.addEventListener("click", () => {
    contactContainer.classList.remove("open");
    document.documentElement.style.overflow = "visible";
  });

  // Get and automatically update the copyright year
  loadCopyrightYear();

  // Testimonials Swipe Effect
  new Swiper(".swiper", {
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
  ["particles-js", "particles-js2"].forEach((elementId) => {
    particlesJS.load(elementId, "script/particles.json", () => {
      console.log("callback - particles.js config loaded");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Event listener for header opacity change on scroll
  document.addEventListener("scroll", handleHeaderOpacity);

  function handleHeaderOpacity() {
    const y = window.scrollY || window.pageYOffset;
    headerBackground.style.opacity = y === 0 ? 0 : map(y, 400, 800, 0, 1);
  }

  // Get and automatically update the copyright year
  function loadCopyrightYear() {
    copyrightYear.innerHTML = new Date().getFullYear();
  }
});

// Utility function for mapping values
const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
