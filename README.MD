# README

## Description

This code calculates a person’s age based on their birthday input. The code consists of three parts:

## getting started

The first part declares three variables that store references to HTML elements on the page using the document.getElementById() method.
The second part defines a function called getAge() that takes a single argument (the user’s birthday) and returns an object containing the user’s age in years, months, days, and hours.
The third part adds an event listener to the button element that calls the calculateAge() function when clicked.

## how it works:

When the user enters their birthday into the input field and clicks the button, the calculateAge() function is called.
If the input field is empty, an alert message pops up asking the user to enter their birthday.
If a valid date is entered, the getAge() function is called with the user’s birthday as an argument.
The getAge() function calculates the difference between the current date and the user’s birthday using JavaScript’s built-in Date() object and returns an object containing the user’s age in years, months, days, and hours.
Finally, this information is displayed on the page using JavaScript’s innerText property.

## languages

This code uses the following programing:

- HTML
- CSS
- JavaScript

## Author

This code was written by [https://github.com/Levidesmond].