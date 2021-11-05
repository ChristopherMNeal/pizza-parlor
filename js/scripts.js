// Business logic for Pizza()
function Pizza(toppingsArray, sizeInInches) {
  this.toppings = toppingsArray;
  this.size = sizeInInches;
}
const pizzaOne = new Pizza (["peppers", "pepperoni", "pepperoncini"], 14);