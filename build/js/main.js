'use strict';

(function () {

  var page = document.querySelector('.page');
  var mainNav = document.querySelector('.main-nav');
  var mainNavList = mainNav.querySelector('ul');
  var burgerBtn = mainNav.querySelector('.burger');

  if (page !== null && mainNav !== null && mainNavList !== null && burgerBtn !== null) {
    burgerBtn.classList.add('burger--closed');
    mainNav.classList.add('main-nav--closed');

    var onOpenMenuClick = function () {
      closeMenu();
    };

    var onEscPress = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeMenu();
      }
    };

    var openMenu = function () {
      page.classList.add('page--scroll');
      burgerBtn.classList.remove('burger--closed');
      burgerBtn.classList.add('burger--opened');
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      mainNavList.addEventListener('click', onOpenMenuClick);
      document.addEventListener('keydown', onEscPress);
    };

    var closeMenu = function () {
      page.classList.remove('page--scroll');
      burgerBtn.classList.remove('burger--opened');
      burgerBtn.classList.add('burger--closed');
      mainNav.classList.remove('main-nav--opened');
      mainNav.classList.add('main-nav--closed');
      mainNavList.removeEventListener('click', onOpenMenuClick);
      document.removeEventListener('keydown', onEscPress);
    };

    burgerBtn.addEventListener('click', function () {
      if (mainNav.classList.contains('main-nav--opened')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
})();

'use strict';

(function () {

  var form = document.querySelector('.form');
  var inputName = form.querySelector('#name');
  var inputPhone = form.querySelector('#phone');

  var PHONE = {
    parameter: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    format: '+7/8 9001234567'
  };

  var MESSAGE = {
    format: 'Укажите телефон в формате ',
    requiredField: 'Поле обязательно для заполнения.'
  };

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
        inputName.setCustomValidity(MESSAGE.requiredField);
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
      if (inputPhone.value.length !== 0 && !PHONE.parameter.test(inputPhone.value)) {
        inputPhone.setCustomValidity(MESSAGE.format + PHONE.format);
      } else if (inputPhone.value.length === 0) {
        inputPhone.setCustomValidity(MESSAGE.requiredField);
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
