'use strict';

(function () {

  var form = document.querySelector('.form');
  var inputName = form.querySelector('#name');
  var inputPhone = form.querySelector('#phone');

  var formatPhone = '89001234567';
  var parameterPhone = /\D/;

  function formAddError(input) {
    input.classList.add('form__error');
  }

  function formRemoveError(input) {
    input.classList.remove('form__error');
  }

  function formValidate() {
    if (inputName.value === '') {
      formAddError(inputName);
    }

    inputName.addEventListener('input', function () {
      formRemoveError(inputName);

      if (inputName.value.length === 0) {
        inputName.setCustomValidity('Поле обязательно для заполнения.');
      } else {
        inputName.setCustomValidity('');
      }
      inputName.reportValidity();
    });

    if (inputPhone.value === '') {
      formAddError(inputPhone);
    }

    inputPhone.addEventListener('input', function () {
      formRemoveError(inputPhone);

      if (inputPhone.value.length !== 0 && parameterPhone .test(inputPhone.value)) {
        inputPhone.setCustomValidity('Номер телефона должен содержать только цифры. Укажите телефон в формате ' + formatPhone + '.');
        inputPhone.value = inputPhone.value.replace(parameterPhone, '');
      } else if (inputPhone.value.length > 11) {
        inputPhone.setCustomValidity('Укажите телефон в формате ' + formatPhone + '.');
      } else if (inputPhone.value.length === 0) {
        inputPhone.setCustomValidity('Поле обязательно для заполнения.');
      } else {
        inputPhone.setCustomValidity('');
      }
      inputPhone.reportValidity();
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
