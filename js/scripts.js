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
  const pizzaKeys = Object.values(this.toppings);
  let toppingString = ""
  pizzaKeys.forEach(function(key) {
    toppingString = toppingString.concat(key + "<br>");
  });
  return toppingString;
}

Pizza.prototype.displayPizza = function() {
  cost = this.calculatePrice();
  return "Your Pizza:<br>" + this.size + "<br>Toppings:<br>" +  this.formatToppings() + "$" + this.calculatePrice();
}



const pizzaLarge = new Pizza (["peppers", "pepperoni", "pepperoncini"], "Large 14 inch");
const pizzaMed = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini"], "Medium 10 inch");
const pizzaXl = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini", "roasted red peppers"], "XL 18 inch");