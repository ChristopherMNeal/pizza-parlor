// Business logic for Pizza()
function Pizza(toppingsArray, sizeInInches) {
  this.toppings = toppingsArray;
  this.size = sizeInInches;
}

Pizza.prototype.calculatePrice = function() {
  let cost = 0;
  switch (this.size){
    case 10:
      cost = 11;
      cost += 1 * this.toppings.length;
      break;
    case 14:
      cost = 17;
      cost += 2 * this.toppings.length;
      break;
    case 18:
      cost = 23;
      cost += 3 * this.toppings.length;
      break;
  }
  return cost;
}

const pizzaLarge = new Pizza (["peppers", "pepperoni", "pepperoncini"], 14);
const pizzaMed = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini"], 10);
const pizzaXl = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini", "roasted red peppers"], 18);