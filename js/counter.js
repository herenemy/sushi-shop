'use strict';

let counter;

window.addEventListener('click', function (e) {
  if (
    e.target.dataset.action === 'plus' ||
    e.target.dataset.action === 'minus'
  ) {
    const counterWrapper = e.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector(`[data-counter]`);

    if (e.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText;
      calcCartPrice();
    }

    if (
      e.target.dataset.action === 'minus' &&
      parseInt(counter.innerText) > 1
    ) {
      counter.innerText = --counter.innerText;
      calcCartPrice();
    } else if (
      e.target.closest('.cart-wrapper') &&
      parseInt(counter.innerText) === 1
    ) {
      e.target.closest('.cart-item').remove();

      toggleCartStatus();

      calcCartPrice();
    }
  }
});
