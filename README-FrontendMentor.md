# Frontend Mentor - Mortgage Repayment Calculator Solution

This is a solution to the [Mortgage Repayment Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my ReadMe for the challenge - The logic follows the Loan Amortization Formula

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/image.png)

## My process

I made sure to finish the html completely before completing the css and then JS. This helped me to look ahead an envision how I wanted to go about this challenge

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript (Vanilla)
- Desktop-first workflow

### What I learned

I deepened my understanding of:

#### CSS

- The `:focus-within` pseudo-class for styling entire container elements when their child input fields are focused.
- Responsive behavior using media queries to adapt layout and component positioning.
- Hover and error states for better UI/UX feedback.

#### JavaScript

- Dynamically applying and removing classes for error validation using `.classList.add()` and `.classList.remove()`.
- Using `.forEach()` and ternary operators to iterate over inputs and conditionally remove errors:

```js
inputField.forEach((el) => {
  el.classList.contains("error") ? el.classList.remove("error") : "";
});
#
DOM manipulation for showing and hiding result sections using .classList.add("hidden") and .classList.remove("hidden").

Efficient form validation logic by checking .value.trim() and customizing error display per field.

These gave me more control over user interaction, form state, and error management.


Continued development

I'd like to improve on:

-Animating UI transitions (e.g. showing results, error messages).

-Exploring unit tests for form validation logic in future projects.


Useful resources
 MDN Web Docs - :focus-within – Helped me understand and apply focus styles effectively.

 CSS Tricks - Custom Form Inputs – Helped in customizing radio buttons with accent-color.

 JavaScript.info - DOM manipulation – Reinforced my understanding of class manipulation and event-driven form behavior.

Author
Name – Scott-Emuakpor Clarence

Github – @TheRealSennju

Acknowledgments
“Last but not least, I want to thank me.” – 🐐
```
