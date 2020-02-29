"use strict";

(function () {
  var arrDown = document.querySelector('.arr-down'),
      countriesHidden = document.querySelector('.header__countries_hidden'),
      headerCountries = document.querySelector('.header__countries'),
      menu = document.querySelector('.menu');
  headerCountries.addEventListener('click', function () {
    arrDown.classList.toggle('arr-down_active');
    countriesHidden.classList.toggle('header__countries_hidden_active');
    menu.classList.toggle('menu-countries_active');
  });
})();

(function () {
  var menuItem = document.querySelectorAll('.menu__item'),
      menuItem2 = document.querySelector('.menu__item-2'),
      menuItemLink = document.querySelector('.menu__item-link'),
      listSub2 = document.querySelector('.menu__list-sub-2'),
      arrRight = document.querySelector('.arr-right'),
      menu = document.querySelector('.menu'),
      footer = document.querySelector('.footer');
  menuItemLink.addEventListener('click', function () {
    menuItem2.classList.toggle('menu__item-2_active');
    menuItem2.classList.toggle('active');
    listSub2.classList.toggle('menu__list-sub_active');
    arrRight.classList.toggle('arr-right_active');

    for (var i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.toggle('menu__item_active');
    }

    menu.classList.toggle('menu_active');
    footer.classList.toggle('footer_active');
  });
})();

(function () {
  var menuItemSub2 = document.querySelector('.menu__item-sub-2');
  var listSubSub2 = document.querySelector('.menu__list-sub-sub-2');
  var arrDownSub = document.querySelector('.menu__item-sub img');
  menuItemSub2.addEventListener('click', function () {
    listSubSub2.classList.toggle('menu__list-sub-sub_active');
    arrDownSub.classList.toggle('arr-down_active');
  });
})();

(function () {
  var headerSearch = document.querySelector('.header__search'),
      form = document.querySelector('.header__form'),
      headerCountriesBlock = document.querySelector('.header__countries-block'),
      menu = document.querySelector('.menu');
  headerSearch.addEventListener('click', function () {
    headerSearch.classList.toggle('active');
    form.classList.toggle('header__form_active');
    headerCountriesBlock.classList.toggle('header__countries_active');
    menu.classList.toggle('menu-countries_active-2');
  });
})();

(function () {
  var burger = document.querySelector('.burger');
  var mainWrapper = document.querySelector('.main-wrapper');
  burger.addEventListener('click', function () {
    mainWrapper.classList.add('main-wrapper_active');
    burger.classList.add('burger_active');
  });
})();

(function () {
  var arrowRight = document.querySelector('.header__arrow-right');
  var mainWrapper = document.querySelector('.main-wrapper');
  var burger = document.querySelector('.burger');
  arrowRight.addEventListener('click', function () {
    mainWrapper.classList.remove('main-wrapper_active');
    burger.classList.remove('burger_active');
  });
})();

(function () {
  var wrapperField = document.querySelector('.wrapper-field'),
      headerSearch = document.querySelector('.header__search'),
      form = document.querySelector('.header__form'),
      headerCountriesBlock = document.querySelector('.header__countries-block'),
      countriesHidden = document.querySelector('.header__countries_hidden'),
      arrDown = document.querySelector('.arr-down');
  wrapperField.addEventListener('click', function () {
    headerSearch.classList.remove('active');
    form.classList.remove('header__form_active');
    headerCountriesBlock.classList.remove('header__countries_active');
    countriesHidden.classList.remove('header__countries_hidden_active');
    arrDown.classList.remove('arr-down_active');
  });
})();

(function() {
  var input = document.querySelector('.header__input-item');
  var footer = document.querySelector('.footer');

  if (innerHeight < 300) {
    input.addEventListener('focus', function () {
      footer.classList.add('footer_active');
    });
    input.addEventListener('blur', function () {
      function delay() {
        footer.classList.remove('footer_active');
      };
      setTimeout(delay, 300);
    }); 
  } 
}());