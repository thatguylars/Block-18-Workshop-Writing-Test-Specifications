const { multiplication, concatOdds } = require("./index.js");
//Multiplication Function test
test("multiplication", () => {
  expect(multiplication(2, 3)).toBe(6);
  expect(multiplication(0, 5)).toBe(0);
  expect(multiplication(-2, -3)).toBe(6);
});
//concatOdds Function test 
test("concatOdds", () => {
  expect(concatOdds([1, 3, 5], [2, 4, 6])).toEqual([1, 3, 5]);
  expect(concatOdds([], [1, 3, 5])).toEqual([1, 3, 5]);
  expect(concatOdds([7, 9, 11], [13, 14, 15])).not.toEqual((14));
});


// Functional test specifications for a shopping cart checkout feature

// Guest Checkout:
// When a guest user tries to checkout with an empty cart, a message should be displayed: "Your cart is empty. Please add items to your cart."
// If Successful at Checkout, The user should be prompted to provide their shipping and billing information.
// The system should validate the provided information.

//Account Creation:
// The user should be asked if they want to create an account.
// If yes, redirect them to the registration page.
// If no, proceed to the payment step.
// Display available payment methods
// Process the payment securely.
// If order is confirmed display an order confirmation page with order number, items, total amount, and shipping information.
// Send an order confirmation email to the user's email address.

// Logged-in User Checkout:
// If a logged-in user tries to checkout with an empty cart, a message should be displayed: "Your cart is empty. Please add items to your cart."
// If Successful at Checkout display a summary of the items in the cart, including quantities, prices, and total amount.
// Allow the user to review and modify the order.
// Prompt the user to choose a payment method.
// Process the payment securely.
// If order is confirmed  Display an order confirmation page with order number, items, total amount, and shipping information.
// Send an order confirmation email to the user's registered email address.
// If payment is not accepted ask for another form of payment 
