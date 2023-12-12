'use strict';

const calcCartPrice = function () {
  const cartItems = document.querySelectorAll('.cart-item'),
    totalPrice = document.querySelector('.total-price'),
    deliveryCost = document.querySelector('.delivery-cost'),
    cartDelivery = document.querySelector(`[data-cart-delivery]`);

  let priceTotal = 0;

  cartItems.forEach(item => {
    const amountEl = item.querySelector(`[data-counter]`),
      priceEl = item.querySelector('.price__currency'),
      currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    priceTotal += currentPrice;
  });

  totalPrice.innerText = priceTotal;

  if (totalPrice.innerText > 0) cartDelivery.classList.remove('none');
  else cartDelivery.classList.add('none');

  if (totalPrice.innerText >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно';
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽';
  }
};
