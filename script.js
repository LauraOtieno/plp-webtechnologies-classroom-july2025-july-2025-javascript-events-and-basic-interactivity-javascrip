// ============================
// Event Handling & Interactivity
// ============================

// 1. Light/Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-theme-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text dynamically
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});

// ============================
// 2. Counter Game
// ============================
const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// ============================
// 3. Collapsible FAQ Section
// ============================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");

    // Toggle active state
    question.classList.toggle("active");
  });
});

// ============================
// 4. Custom Form Validation
// ============================
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error message elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const formSuccess = document.getElementById("form-success");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Validate Name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  // Show success message if valid
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  }
});
