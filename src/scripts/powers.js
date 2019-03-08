// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

const flight = document.getElementById("flight");
const mindReading = document.getElementById("mindreading");
const xray = document.getElementById("xray");


function flightHandlerFunction() {
  flight.classList.toggle("enabled")
  flight.classList.toggle("disabled")
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

function mindreadingHandlerFunction() {
  mindreading.classList.toggle("enabled")
  mindReading.classList.toggle("disabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingHandlerFunction);

function xrayHandlerFunction() {
  xray.classList.toggle("enabled")
  xray.classList.toggle("disabled")
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

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