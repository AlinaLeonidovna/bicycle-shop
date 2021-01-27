'use strict';

(function () {

  var form = document.querySelector('.form');
  var inputName = form.querySelector('#name');
  var inputPhone = form.querySelector('#phone');

  function formAddError(input) {
    input.classList.add('form__input--error');
  }

  function formRemoveError(input) {
    input.classList.remove('form__input--error');
  }

  function formValidate() {
    if (inputName.value === '') {
      formAddError(inputName);
    }

    inputName.addEventListener('input', function () {
      formRemoveError(inputName);
    });

    if (inputPhone.value === '') {
      formAddError(inputPhone);
    }

    inputPhone.addEventListener('input', function () {
      formRemoveError(inputPhone);
      inputPhone.setCustomValidity('Формат телефона +7/8 1234567890');
    });
  }

  function formSend(evt) {
    if (inputName.value === '' || inputPhone.value === '') {
      evt.preventDefault();

      formValidate();
    }
  }

  form.addEventListener('submit', formSend);
})();
