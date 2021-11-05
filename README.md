# _Pizza Parlor_

#### By _**Christopher Neal**_

#### _Pepper's Pizza Parlor_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

## Description

_This page practices objects by making a pizza parlor website. Users can choose a pizza size and any additional toppings they would like and the page will display an order confirmation with a total price for the pizza._

## Setup/Installation Requirements

* _Clone the Programming Language Suggester GitHub repository from https://github.com/ChristopherMNeal/programming-lang-suggester by running the following code in your terminal_
`$ git clone https://github.com/ChristopherMNeal/pizza-parlor`
* _Open index.html in your preferred browser_

* _Or you can click [here](https://christophermneal.github.io/pizza-parlor/) to visit the page on gh-pages._

## Known Bugs

_None_

## Future Updates

* _Include support for multiple pies._
* _Add delivery option._

## Known Bugs

_None_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _5 November 2021_ _Christopher Neal_


## Tests
Describe: Pizza()
Test: "It should return a Pizza object with two properties for toppings and size."
Code: const pizzaOne = new Pizza (["peppers", "pepperoni", "pepperoncini"], 14);
Expected Output: Pizza { toppings: ["peppers", "pepperoni", "pepperoncini"], size: 14 }


Describe: Pizza.prototype.calculatePrice()
Test: "It should calculate a price based on size and return a price."
Code: 
  const pizzaOne = new Pizza (["peppers", "pepperoni", "pepperoncini"], 14);
  pizzaOne.calculatePrice();
Expected Output: 17

Test: "For 10 inch pizzas, it should add $1 for each topping and return the total price."
Code: 
  const pizzaMed = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini"], 10);
  pizzaTwo.calculatePrice();
Expected Output: 15

Test: "For 14 and 18 inch pizzas, it should add $2 and $3 for each topping respectively, and return the total price."
Code:
  const pizzaOne = new Pizza (["peppers", "pepperoni", "pepperoncini"], 14);
  pizzaLarge.calculatePrice();
Expected Output: 23
Code:
  const pizzaXl = new Pizza (["pepper", "peppers", "pepperoni", "pepperoncini", "roasted red peppers"], 18);
  pizzaThree.calculatePrice();
Expected Output: 38


Describe: Pizza.prototype.formatToppings()
Text: "It should format toppings to display in displayPizza()."
Code: pizzaLarge.formatToppings();
Expected Output: "Peppers<br>Pepperoni<br>Pepperoncini"


Describe: Pizza.prototype.displayPizza()
Test: "It should display the pizza order and price with minimal formatting"
Code: pizzaLarge.displayPizza();
Expected Output: "Your Pizza:<br>14<br>Toppings:<br>peppers,pepperoni,pepperoncini<br>$23"

Test: "It should call Pizza.prototype.formatToppings() to display formatted toppings."
Code: pizzaLarge.displayPizza();
Expected Output: "Your Pizza:<br>14<br>Toppings:<br>peppers<br>pepperoni<br>pepperoncini<br>$23"


Describe: toppingsInput() 
Test: "It should take input from the checkbox form name="toppings" and consol log the results"
Code: 
// "Pepper" checkbox is checked in UI
toppingsInput()
Expected Output: ["Pepper"]

