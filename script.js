document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.querySelector("#celsius");
    const fahrenheitInput = document.querySelector("#fahrenheit");
    const kelvinInput = document.querySelector("#kelvin");
    const btn = document.querySelector(".btn");

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }
    /*Celsius to Fahrenheit and Kelvin (C-> F and K) conversion*/ 
    function convertFromCelsius() {
        const cTemp = parseFloat(celsiusInput.value);
        if (!isNaN(cTemp)) {
            const fTemp = (cTemp * (9 / 5)) + 32;
            const kTemp = cTemp + 273.15;

            fahrenheitInput.value = roundNumber(fTemp);
            kelvinInput.value = roundNumber(kTemp);
        } else {
            fahrenheitInput.value = "";
            kelvinInput.value = "";
        }
    }
    /*Fahrenheit to Celsius and Kelvin (F-> C and K) conversion*/ 
    function convertFromFahrenheit() {
        const fTemp = parseFloat(fahrenheitInput.value);
        if (!isNaN(fTemp)) {
            const cTemp = (fTemp - 32) * (5 / 9);
            const kTemp = (fTemp - 32) * (5 / 9) + 273.15;

            celsiusInput.value = roundNumber(cTemp);
            kelvinInput.value = roundNumber(kTemp);
        } else {
            celsiusInput.value = "";
            kelvinInput.value = "";
        }
    }
    /*Kelvin to Celsius and Fahrenheit (K-> C and F) conversion*/ 
    function convertFromKelvin() {
        const kTemp = parseFloat(kelvinInput.value);
        if (!isNaN(kTemp)) {
            const cTemp = kTemp - 273.15;
            const fTemp = (kTemp - 273.15) * (9 / 5) + 32;

            celsiusInput.value = roundNumber(cTemp);
            fahrenheitInput.value = roundNumber(fTemp);
        } else {
            celsiusInput.value = "";
            fahrenheitInput.value = "";
        }
    }

    celsiusInput.addEventListener('input', convertFromCelsius);
    fahrenheitInput.addEventListener('input', convertFromFahrenheit);
    kelvinInput.addEventListener('input', convertFromKelvin);

});