// Disable buttons and links
const myButtons = document.querySelectorAll("a");
myButtons.forEach((button) => {
  button.addEventListener("click", (event) => event.preventDefault());
});
