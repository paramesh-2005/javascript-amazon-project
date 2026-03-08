import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
}); // Anonymous Function: Function without a name

/*
Promises:
- better way to handle asynchronous code
- similar to done() function
- let us wait for some code to finish, before going to the next step
- keep our code more flat
- Promise.all(): Let us run multiple process at the same time and wait for all of them to finish
*/

/*
resolve is a function
- similar to done() function
- lets us control when to go to the next step
*/


// Multiple callbacks cause a lot of nesting
// Nesting means code inside a code