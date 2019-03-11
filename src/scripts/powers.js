// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

// const flight = document.getElementById("flight");
// const mindReading = document.getElementById("mindreading");
// const xray = document.getElementById("xray");


// function flightHandlerFunction() {
//   flight.classList.toggle("enabled")
//   flight.classList.toggle("disabled")
// }

// document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

// function mindreadingHandlerFunction() {
//   mindreading.classList.toggle("enabled")
//   mindReading.classList.toggle("disabled")
// }

// document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);

// function xrayHandlerFunction() {
//   xray.classList.toggle("enabled")
//   xray.classList.toggle("disabled")
// }

// document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

// function enableAllPowers() {
//   const enabledPowers = document.querySelectorAll(".disabled")
//   for (let i = 0; i < enabledPowers.length; i++) {
//     enabledPowers[i].classList = "enabled"
//   }
// }

// document.querySelector("#activate-all").addEventListener("click", enableAllPowers);

// function disableAllPowers() {
//   const disabledPowers = document.querySelectorAll(".enabled")
//   for (let i = 0; i < disabledPowers.length; i++) {
//     disabledPowers[i].classList = "disabled"
//   }
// }

// document.querySelector("#deactivate-all").addEventListener("click", disableAllPowers);



/************************************************************************ */
// Challenge: One Function to Rule Them All
// The learning objective of this challenge to write a function handler to be used for multiple events, and uses information in the event argument to perform common logic.

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-") in your function)

function eventHandler(event) {
  let targetedEvent = event.target.id.split("-")
  document.getElementById(targetedEvent[1]).classList.toggle("enabled")
  document.getElementById(targetedEvent[1]).classList.toggle("disabled")
}

document.querySelector("#activate-flight").addEventListener("click", eventHandler);
document.querySelector("#activate-mindreading").addEventListener("click", eventHandler);
document.querySelector("#activate-xray").addEventListener("click", eventHandler);

function enableAllPowers() {
  const enabledPowers = document.querySelectorAll(".disabled")
  for (let i = 0; i < enabledPowers.length; i++) {
    enabledPowers[i].classList = "enabled"
  }
}

document.querySelector("#activate-all").addEventListener("click", enableAllPowers);

function disableAllPowers() {
  const disabledPowers = document.querySelectorAll(".enabled")
  for (let i = 0; i < disabledPowers.length; i++) {
    disabledPowers[i].classList = "disabled"
  }
}

document.querySelector("#deactivate-all").addEventListener("click", disableAllPowers);