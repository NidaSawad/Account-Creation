document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  
  let errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = "";

  if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
    errorMsg.innerHTML = "All fields are required.";
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    errorMsg.innerHTML = "Please enter a valid email address.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.innerHTML = "Passwords do not match.";
    return;
  }

  const passwordPattern = /[!@#$%^&*(),.?":{}|<>]/;
  if (!password.match(passwordPattern)) {
    errorMsg.innerHTML = "Password must contain at least one special character.";
    return;
  }

  let userData = { firstName, lastName, email, username, password };
  localStorage.setItem("user", JSON.stringify(userData));

  alert("Sign up successful!");
  window.location.href = "login.html";
});
