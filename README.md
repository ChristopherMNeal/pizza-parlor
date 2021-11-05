--Pizza Parlor Plan--
-user can choose 
  -one or more individual toppings (cheese, pepperoni, artichoke, anchovy)
  -size to order a pizza 
    -and see the final cost.
--Further Exploration--
-Style your site with CSS and images.
-Allow users to order more than one pizza with different toppings.
-Display the list of pizzas ordered as links that can be clicked for details.
-Offer a delivery option that then requires address information.

INPUTS: 
  -checkboxes for toppings
  -radio button for size
  -name
  -address
  -radio button for delivery

OUTPUTS:
  -insert order as text to review
  -final cost

-Create a pizza object constructor with properties for toppings and size.
-Create a prototype method for the cost of a pizza depending on the selections chosen.
-Use your own formula for this.
  Pizza object {
    toppings [topping 1, topping 2, topping 3, etc.] 
    size 
  }
  method to add toppings
  method to calculate price

--Tests--
Describe: Pizza()
Test: "It should return a Pizza object with two properties for toppings and size"
Code: const pizzaOne = new Pizza (["peppers", "pepperoni", "pepperoncini"], "medium");
Expected Output: Pizza { toppings: ["peppers", "pepperoni", "pepperoncini"], size: "medium" }



--Instructions--
-Break the program down into simple, individual behaviors using the test syntax you've learned.
-Begin with the simplest possible behavior.

    Describe: Pizza()

    Test: "It should return a Pizza object with two properties for toppings and size"
    Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
    Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }
    Objectives

-Your code will be reviewed for the following objectives:
  -Constructors and prototypes are used successfully.
  -Application works as expected.
  -Tests are included for each business logic behavior and code is committed after each test passes.
  -Project is in a polished, portfolio-quality state.
      -You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
      -You are following the best practices and coding conventions we teach.
  -The prompt’s required functionality and baseline project requirements are in place by the deadline.
      
      -A complete and informative README
      -The project's commit history demonstrates that the project’s required work schedule and hours have been met:
      -8 hours completed on Friday is required for full-time students


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

_This page practices objects by making a pizza parlor website._

## Setup/Installation Requirements

* _Clone the Programming Language Suggester GitHub repository from https://github.com/ChristopherMNeal/programming-lang-suggester by running the following code in your terminal_
`$ git clone https://github.com/ChristopherMNeal/pizza-parlor`
* _Open index.html in your preferred browser_

* _Or you can click [here](https://christophermneal.github.io/pizza-parlor/) to visit the page on gh-pages._

## Known Bugs

_None_

## Future Updates

* _None at this time_

## Known Bugs

_None_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _5 November 2021_ _Christopher Neal_