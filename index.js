function togglePassword() {
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// Falling letters effect
document.addEventListener("keydown", (event) => {
  const letter = document.createElement("span");
  letter.classList.add("letter");
  letter.textContent = event.key;

  // Random X position
  letter.style.left = Math.random() * window.innerWidth + "px";

  document.getElementById("falling-letters").appendChild(letter);

  // Remove after animation
  setTimeout(() => {
    letter.remove();
  }, 2000);
});
