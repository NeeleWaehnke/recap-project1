const darkToggle = document.querySelector('[data-js="toggle-switch"]');
const userCard = document.querySelector('[data-js="user-card"]');
const body = document.querySelector('[data-js="body"]');
const header = document.querySelector('[data-js="header"]');
const userAbout = document.querySelector('[data-js="user-about"]');
const footer = document.querySelector('[data-js="footer"]');
const settings = document.querySelector('[data-js="settings"]');

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark_mode-body');
});

darkToggle.addEventListener('click', () => {
  userCard.classList.toggle('dark_mode-card');
});

darkToggle.addEventListener('click', () => {
  header.classList.toggle('dark_mode-header');
});

darkToggle.addEventListener('click', () => {
  userAbout.classList.toggle('dark_mode-card');
});

darkToggle.addEventListener('click', () => {
  footer.classList.toggle('dark_mode-footer');
});

darkToggle.addEventListener('click', () => {
  settings.classList.toggle('dark_mode-card');
});
