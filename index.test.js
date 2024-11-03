const { multiplication, concatOdds } = require("./index.js");

// function "multiplacation"- returns the product of two values.
// Happy- input the function with 3 and 5 and would expect 15.
// unhappy- input the function with 3 and 5 and would  not expect 20.
// unhappy- input the function with 3 and 5 and would  not expect 8.
// unhappy- input the function with 3 and 5 and would  not expect 2.
// unhappy- input the function with 3 and 5 and would  not expect -2.

test("multiplication", () => {
  expect(multiplication(2, 3)).toBe(6);
  expect(multiplication(0, 5)).toBe(0);
  expect(multiplication(-2, -3)).toBe(6);
});


// function "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers
// Happy- expect array 1 [1, 3, 5], and array 2 [2, 4, 6] to equal [1, 3, 5];
// unhappy-expect array 3 [11, 33, 55], and array 4 [22, 44, 66] not equal [22, 44, 66];
// unhappy-expect array 1 [1, 3, 5], and array 2 [2, 4, 6] not equal [-2, 4, 6];
// unhappy-expect array 1 [1, 3, 5], and array 2 [2, 4, 6] not equal [1, 2, 3, 4, 5];

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
