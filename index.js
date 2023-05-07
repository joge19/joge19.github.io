"use strict";

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const tempEl = document.getElementById("temp");
let meterFeet = "";
let feetMeter = "";
let literGallon = "";
let gallonLiter = "";
let kilogrammPound = "";
let poundKilogramm = "";
let celsiusFahrenheit = "";
let fahrenheitCelsius = "";
let numEl = (document.getElementById("number-el").value = "0.0");

function calctUnits() {
  let numEl = document.getElementById("number-el").value;
  meterFeet = (numEl * 3.281).toFixed(3);
  feetMeter = (numEl / 3.281).toFixed(3);
  literGallon = (numEl * 0.264).toFixed(3);
  gallonLiter = (numEl / 0.264).toFixed(3);
  kilogrammPound = (numEl * 2.204).toFixed(3);
  poundKilogramm = (numEl / 2.204).toFixed(3);
  celsiusFahrenheit = (numEl * 1.8 + 32).toFixed(1);
  fahrenheitCelsius = ((numEl - 32) / 1.8).toFixed(1);

  lengthEl.innerHTML = `${numEl} meters = ${meterFeet} feet | ${numEl} feet = ${feetMeter} meters`;
  volumeEl.innerHTML = `${numEl} liter = ${literGallon} gallons | ${numEl} gallons = ${gallonLiter} liter`;
  massEl.innerHTML = `${numEl} kilograms = ${kilogrammPound} pound | ${numEl} pound = ${poundKilogramm} kilograms`;
  tempEl.innerHTML = `${numEl} °C = ${celsiusFahrenheit} °F | ${numEl} °F = ${fahrenheitCelsius} °C`;
}

function resetAll() {
  document.getElementById("number-el").value = "0.0";
  document.getElementById("length").innerHTML = "";
  document.getElementById("volume").innerHTML = "";
  document.getElementById("mass").innerHTML = "";
  document.getElementById("temp").innerHTML = "";
}
