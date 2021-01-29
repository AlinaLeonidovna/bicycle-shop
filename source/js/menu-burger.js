'use strict';

(function () {

  var page = document.querySelector('.page');
  var mainNav = document.querySelector('.main-nav');
  var mainNavList = mainNav.querySelector('ul');
  var burgerBtn = mainNav.querySelector('.burger');

  if (page !== null && mainNav !== null && mainNavList !== null && burgerBtn !== null) {
    burgerBtn.classList.add('burger--closed');
    mainNav.classList.add('main-nav--closed');
  }

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

})();
