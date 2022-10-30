const darkToggle = document.querySelector('[data-js="toggle-switch"]');

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
