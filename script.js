// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
  
    // Initially show only the login form
    signupForm.style.display = "none";
  
    // Function to toggle forms
    const toggleForm = (formToShow, formToHide) => {
      formToShow.style.display = "block";
      formToHide.style.display = "none";
    };
  
    // Add event listener for Login form submission
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username === "" || password === "") {
        alert("Please fill in all fields.");
      } else {
        alert(`Welcome back, ${username}!`);
        // Redirect or perform login actions here
      }
    });
  
    // Add event listener for Sign-Up form submission
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form submission
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password-signup").value.trim();
      const confirmPassword = document.getElementById("confirm-password").value.trim();
  
      if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
      } else {
        alert(`Thank you for signing up, ${name}!`);
        // Redirect or perform sign-up actions here
      }
    });
  
    // Add a toggle button (optional improvement)
    const toggleButtons = document.createElement("div");
    toggleButtons.innerHTML = `
      <button id="show-login" style="margin: 10px;">Switch to Login</button>
      <button id="show-signup" style="margin: 10px;">Switch to Sign Up</button>
    `;
    document.querySelector(".form-container").appendChild(toggleButtons);
  
    // Toggle between forms
    document.getElementById("show-login").addEventListener("click", () => {
      toggleForm(loginForm, signupForm);
    });
  
    document.getElementById("show-signup").addEventListener("click", () => {
      toggleForm(signupForm, loginForm);
    }); 
  });

