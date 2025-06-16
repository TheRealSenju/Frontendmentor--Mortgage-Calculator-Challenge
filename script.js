"use strict";

const mortgageAmount = document.getElementById("mortgage-amount");
const mortgageTerm = document.getElementById("mortgage-term");
const interestRate = document.getElementById("interest-rate");
const repaymentRadio = document.getElementById("repayment");

const clearBtn = document.querySelector(".clear");
const calculateBtn = document.querySelector(".btn");

const monthlyPayment = document.querySelector(".monthly-repayments");
const totalPayment = document.querySelector(".total-payment");

const emptyPage = document.querySelector(".empty-results");
const completedPage = document.querySelector(".completed-results");

const inputField = document.querySelectorAll(".input-field");
const errorText = document.querySelectorAll("p.error");

let amount, term, rate, monthlyFigure, totalFigure, active;

//going from error to working/calc  use contain? arrow functionn stuff...also for init

const init = function () {
  emptyPage.classList.remove("hidden");
  completedPage.classList.add("hidden");
  mortgageAmount.value = "";
  mortgageTerm.value = "";
  interestRate.value = "";
  repaymentRadio.checked = false;
  inputField.forEach((el) => {
    el.classList.remove("error");
  });
  errorText.forEach((el) => {
    el.classList.add("hidden");
  });
};

const activeInput = function () {
  if (
    mortgageAmount.value === "" ||
    mortgageTerm.value === "" ||
    interestRate.value === "" ||
    repaymentRadio.checked === false
  ) {
    active = 0;
  } else {
    active = 1;
    inputField.forEach((el) => {
      el.classList.remove("error");
    });
    errorText.forEach((el) => {
      el.classList.add("hidden");
    });
  }
  console.log(active);
};

const error = function () {
  init();
  inputField.forEach((el) => {
    el.classList.add("error");
  });
  errorText.forEach((el) => {
    el.classList.remove("hidden");
  });
};

const calculation = function () {
  amount = Number(mortgageAmount.value);
  term = Number(mortgageTerm.value);
  rate = Number(interestRate.value);

  let monthlyInterestRate = rate / 1200; // (Number(interestRate.value) / 100 ) / 12 months
  let numOfPayment = term * 12; // term in years  * 12 months

  monthlyFigure =
    (amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numOfPayment))) /
    (Math.pow(1 + monthlyInterestRate, numOfPayment) - 1); // loan amortization formula

  console.log(monthlyInterestRate, numOfPayment, monthlyFigure);

  totalFigure = monthlyFigure * numOfPayment;
};

clearBtn.addEventListener("click", init);

calculateBtn.addEventListener("click", (e) => {
  activeInput();
  if (active === 1) {
    calculation();

    emptyPage.classList.add("hidden");
    completedPage.classList.remove("hidden");

    monthlyPayment.textContent = `₤${monthlyFigure.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    totalPayment.textContent = `₤${totalFigure.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  } else {
    error();
  }
  e.preventDefault(); // prevents the button from refreshing automatically
});
