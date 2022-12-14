const bookmarkImage = document.querySelector('[data-js="bookmark-img"]');
const questionButton = document.querySelectorAll(
  '[data-js="questioncard-button"]'
);
const questionAnswer = document.querySelectorAll(
  '[data-js="questioncard-answer"]'
);

function imageChange() {
  if (
    bookmarkImage.src.match(
      'assets/icons8-lesezeichen-material-outlined/icons8-lesezeichen-96.svg'
    )
  ) {
    bookmarkImage.src =
      'assets/icons8-lesezeichen-material-rounded/icons8-lesezeichen-96.svg';
  } else {
    bookmarkImage.src =
      'assets/icons8-lesezeichen-material-outlined/icons8-lesezeichen-96.svg';
  }
}

bookmarkImage.addEventListener('click', () => {
  imageChange();
});

questionButton.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.target.innerHTML =
      e.target.innerHTML == 'Hide answer' ? 'Show answer' : 'Hide answer';
    questionAnswer[index].classList.toggle('questioncard__answer--show');
  });
});

// function buttonChange() {
//   if (questionButton.innerText === 'Show answer') {
//     questionButton.innerText = 'Hide answer';
//   } else if (questionButton.innerText === 'Hide answer') {
//     questionButton.innerText = 'Show answer';
//   }
// }
// questionButton.addEventListener('click', (e) => {
//   e.target.innerHTML =
//     e.target.innerHTML == 'Hide answer' ? 'Show answer' : 'Hide answer';
// });
