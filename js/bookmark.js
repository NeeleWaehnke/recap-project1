const bookmarkImage = document.querySelector('[data-js="bookmark-img"]');
const questionButton = document.querySelector(
  '[data-js="questioncard-button"]'
);
const questionAnswer = document.querySelector(
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

questionButton.addEventListener('click', () => {
  questionAnswer.classList.toggle('questioncard__answer--show');
  buttonChange();
});

function buttonChange() {
  if ((questionButton.innerText = 'Show answer')) {
    questionButton.innerText = 'hide answer';
  } else if ((questionButton.innerText = 'hide answer')) {
    questionButton.innerText = 'Show answer';
  }
}
// questionButton.addEventListener('click', (e) => {
//   e.target.innerHTML =
//     e.target.innerHTML == 'Hide answer' ? 'Show answer' : 'Hide answer';
// });
