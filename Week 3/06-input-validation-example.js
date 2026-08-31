// 06 - Putting the Topics Together: Convert, Validate, Decide
// Run with: node 06-input-validation-example.js

function processOrder(rawQuantity, rawPrice) {
  // Step 1: Convert at the edge.
  const quantity = Number(rawQuantity);
  const price = Number(rawPrice);

  // Step 2: Validate conversion results.
  if (Number.isNaN(quantity) || Number.isNaN(price)) {
    console.log('Please enter numbers only.');
    return;
  }

  // Step 3: Validate business rules.
  if (quantity <= 0) {
    console.log('Quantity must be greater than zero.');
    return;
  }

  if (price < 0) {
    console.log('Price cannot be negative.');
    return;
  }

  // Step 4: Use known numeric types for calculations.
  const subtotal = quantity * price;

  // Step 5: Make a decision.
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  console.log(`Quantity: ${quantity}`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(shipping === 0 ? 'Free shipping' : `Shipping: $${shipping}`);
  console.log(`Total: $${total.toFixed(2)}`);
}

processOrder('3', '19.99');
console.log('---');
processOrder('cat', '19.99');
console.log('---');
processOrder('0', '19.99');
