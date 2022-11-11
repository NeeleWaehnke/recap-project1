const form = document.querySelector('[data-js="new-questions__form"]');
const button = document.querySelector('[data-js="form-button"]');
const question = document.querySelector('[data-js="form-question"]');
const answer = document.querySelector('[data-js="form-answer"]');
const tag = document.querySelector('[data-js="form-tag"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const questionInput = question.value;
  const answerInput = answer.value;
  const tagInput = tag.value;

  console.log(question.value);

  const newCard = document.createElement('section');
  newCard.classList.add('questioncard');
  main.append(newCard);

  const newCardQuestion = document.createElement('p');
  newCardQuestion.classList.add('questioncard__question');
  newCardQuestion.textContent = questionInput;
  newCard.append(newCardQuestion);

  const newCardAnswer = document.createElement('p');
  newCardAnswer.classList.add('questioncard__answer--show');
  newCardAnswer.textContent = answerInput;
  newCard.append(newCardAnswer);

  const newCardTag = document.createElement('p');
  newCardTag.classList.add('questioncard__tag');
  newCardTag.textContent = tagInput;
  newCard.append(newCardTag);
});
