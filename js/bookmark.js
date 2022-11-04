const bookmarkImage = document.querySelector('[data-js="bookmark-img"]');

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
