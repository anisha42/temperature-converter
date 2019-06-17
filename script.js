const celcius_input = document.querySelector('#celcius > input');
const fahrenheit_input = document.querySelector('#fahrenheit > input');
const kelvin_input = document.querySelector('#kelvin > input');

function roundNum(num){
	return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin() {
	const cTemp = parseFloat(celcius_input.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;

	fahrenheit_input.value = roundNum(fTemp);
	kelvin_input.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
	const fTemp = parseFloat(fahrenheit_input.value);
	const cTemp = (5/9) * (fTemp - 32);
	const kTemp = cTemp + 273.15;

	celcius_input.value = roundNum(cTemp);
	kelvin_input.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
	const kTemp = parseFloat(kelvin_input.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (cTemp * (9/5)) + 32;

	celcius_input.value = roundNum(cTemp);
	fahrenheit_input.value = roundNum(fTemp);
}

function main() {
celcius_input.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheit_input.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvin_input.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();