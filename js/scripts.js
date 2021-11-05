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
    toppingString = toppingString.concat("<li>" + key + "</li>");
  });
  return toppingString;
}

Pizza.prototype.displayPizza = function() {
  cost = this.calculatePrice();
  return "Your Pizza:<br><div id='details'><ul><li>" + this.size + "</li></ul></div><div class='small'>(with red sauce<br>and cheese)</div><br>Additional<br>Toppings:<br><div id='details'><ul>" +  this.formatToppings() + "</ul></div>--------------<br>Cost: <span id='details'>$" + this.calculatePrice() + "</span>";
}

function noInput(input) {
  if (!input) {
    $("#no-input-message").show();
    returnToPreviousPage();
    return false;
  } else {
    return input;
  }
}

// UI Logic
function toppingsInput() {
  const checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
  let toppings = [];
  if (checkboxes.length === 0) {
    toppings.push("none");
  } else {
    checkboxes.forEach(function(checkbox) {
      toppings.push(checkbox.value);
    });
  }
  return toppings;
}

function pizzaOrder(size) {
  let toppings = toppingsInput()
  const pizzaInput = new Pizza(toppings, size);
  return pizzaInput;
}

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    let size = noInput($("input:radio[name=size]:checked").val());
    let pizza = pizzaOrder(size);
    let order = pizza.displayPizza();
    $("#no-input-message").hide();
    $("#order-display").show();
    $("#order-display").html(order);
    });
});