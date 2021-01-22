let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');
navToggle.addEventListener('click', function () {
  if(navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// скрипт для валидации формы при отправке
let selectionForm = document.querySelector(".selection-form");
let selectionFormField = document.querySelectorAll(".selection-form__input");

if(selectionForm) {
  selectionForm.addEventListener("submit", function (evt) {
    for (let i=0; i<=4; i++) {
      if (!selectionFormField[i].value) {
        evt.preventDefault();
        selectionFormField[i].classList.add("selection-form__input--error");
      } else {
        selectionFormField[i].classList.remove("selection-form__input--error");
      }
    }
  })
}
