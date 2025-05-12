document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let errorMsg = document.getElementById("errorMsg");
  errorMsg.innerHTML = "";

  let storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    errorMsg.innerHTML = "No user found. Please sign up first.";
    return;
  }

  if (username !== storedUser.username || password !== storedUser.password) {
    errorMsg.innerHTML = "Invalid username or password.";
    return;
  }

  alert(`Welcome, ${storedUser.firstName}!`);
  window.location.href = "welcome.html";
});
