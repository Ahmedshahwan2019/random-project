const price = document.querySelector('[name=price]');
const quantity = document.querySelector('[name=quantity]');
const totalCost = document.getElementById('totalCost');
const labelSpan = document.getElementById('label-span');
console.log(labelSpan);

const calcTotal = () => {
  const prices = price.value;
  const quantities = quantity.value;
  const total = prices * quantities;
  totalCost.innerText = '$ ' + total.toFixed(2);
};
calcTotal();

function updateQuantity() {
  let quantities = quantity.value;
  labelSpan.innerText = quantities;
}
updateQuantity();
price.addEventListener('input', calcTotal);
quantity.addEventListener('input', calcTotal);
labelSpan.addEventListener('input', updateQuantity);
