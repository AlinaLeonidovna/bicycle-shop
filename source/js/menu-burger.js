'use strict';

(function () {

  var page = document.querySelector('.page');
  var mainNav = document.querySelector('.main-nav');
  var mainNavList = mainNav.querySelector('.main-nav__list');
  var burgerBtn = mainNav.querySelector('.burger');

  mainNav.classList.add('main-nav--js');
  burgerBtn.classList.add('burger--closed');
  mainNavList.classList.add('main-nav__list--closed');

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
    mainNavList.classList.remove('main-nav__list--closed');
    mainNavList.classList.add('main-nav__list--opened');
    mainNavList.addEventListener('click', onOpenMenuClick);
    document.addEventListener('keydown', onEscPress);
  };

  var closeMenu = function () {
    page.classList.remove('page--scroll');
    burgerBtn.classList.remove('burger--opened');
    burgerBtn.classList.add('burger--closed');
    mainNavList.classList.remove('main-nav__list--opened');
    mainNavList.classList.add('main-nav__list--closed');
    mainNavList.removeEventListener('click', onOpenMenuClick);
    document.removeEventListener('keydown', onEscPress);
  };

  burgerBtn.addEventListener('click', function () {
    if (mainNavList.classList.contains('main-nav__list--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

})();
