'use strict';

const toggleCartStatus = function () {
  const cartEmptyBadge = document.querySelector(`[data-cart-empty]`),
    cartWrapper = document.querySelector('.cart-wrapper'),
    orderForm = document.querySelector('#order-form');

  if (cartWrapper.children.length > 0) {
    cartEmptyBadge.classList.add('none');
    orderForm.classList.remove('none');
  } else {
    cartEmptyBadge.classList.remove('none');
    orderForm.classList.add('none');
  }
};
