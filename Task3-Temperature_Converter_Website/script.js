function convertTemperature() {
  var temperatureInput = document.getElementById("temperatureInput").value;
  var conversionType = document.getElementById("conversionType").value;

  if (!temperatureInput) {
    resetConversion();
    return;
  }

  var temperature = parseFloat(temperatureInput);

  if (isNaN(temperature)) {
    resetConversion();
    return;
  }

  var convertedCelsius = document.getElementById("convertedCelsius");
  var convertedFahrenheit = document.getElementById("convertedFahrenheit");
  var convertedKelvin = document.getElementById("convertedKelvin");

  if (conversionType === "celsius") {
    var celsius = temperature;
    var fahrenheit = convertToFahrenheit(temperature);
    var kelvin = convertToKelvin(temperature);

    displayConversion(celsius, fahrenheit, kelvin);
  } else if (conversionType === "fahrenheit") {
    var celsius = convertToCelsius(temperature);
    var fahrenheit = temperature;
    var kelvin = convertToKelvin(celsius);

    displayConversion(celsius, fahrenheit, kelvin);
  } else if (conversionType === "kelvin") {
    var celsius = convertFromKelvin(temperature);
    var fahrenheit = convertToFahrenheit(celsius);
    var kelvin = temperature;

    displayConversion(celsius, fahrenheit, kelvin);
  }
}

function displayConversion(celsius, fahrenheit, kelvin) {
  var convertedCelsius = document.getElementById("convertedCelsius");
  var convertedFahrenheit = document.getElementById("convertedFahrenheit");
  var convertedKelvin = document.getElementById("convertedKelvin");

  convertedCelsius.textContent = "Celsius: " + celsius.toFixed(2);
  convertedFahrenheit.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
  convertedKelvin.textContent = "Kelvin: " + kelvin.toFixed(2);
}

function convertToCelsius(temperature) {
  return (temperature - 32) * (5 / 9);
}

function convertToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

function convertToKelvin(temperature) {
  return temperature + 273.15;
}

function convertFromKelvin(temperature) {
  return temperature - 273.15;
}

function resetConversion() {
  var convertedCelsius = document.getElementById("convertedCelsius");
  var convertedFahrenheit = document.getElementById("convertedFahrenheit");
  var convertedKelvin = document.getElementById("convertedKelvin");
  convertedCelsius.textContent = "";
  convertedFahrenheit.textContent = "";
  convertedKelvin.textContent = "";
}
