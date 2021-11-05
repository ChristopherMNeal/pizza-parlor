// Business logic for Pizza()
function Pizza(toppingsArray, sizeString) {
  this.toppings = toppingsArray;
  this.size = sizeString;
}

Pizza.prototype.calculatePrice = function() {
  let cost = 0;
  switch (this.size){
    case "Medium 10 inch":
      cost = 11;
      cost += 1 * this.toppings.length;
      break;
    case "Large 14 inch":
      cost = 17;
      cost += 2 * this.toppings.length;
      break;
    case "XL 18 inch":
      cost = 23;
      cost += 3 * this.toppings.length;
      break;
  }
  return cost;
}

Pizza.prototype.formatToppings = function() {
  Object.keys(this.toppings).forEach(function(key) {
    console.log(this.toppings[key]);
  });
}

Pizza.prototype.displayPizza = function() {
  cost = this.calculatePrice();
  return "Your Pizza:<br>" + this.size + "<br>Toppings:<br>" +  this.toppings + "<br>$" + this.calculatePrice();
}



const pizzaLarge = new Pizza (["peppers", "pepperoni", "pepperoncini"], "Large 14 inch");
const pizzaMed = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini"], "Medium 10 inch");
const pizzaXl = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini", "roasted red peppers"], "XL 18 inch");