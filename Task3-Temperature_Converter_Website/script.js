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
      convertedCelsius.textContent = "Celsius: " + temperature;
      convertedFahrenheit.textContent = "Fahrenheit: " + convertToFahrenheit(temperature);
      convertedKelvin.textContent = "Kelvin: " + convertToKelvin(temperature);
    } else if (conversionType === "fahrenheit") {
      convertedCelsius.textContent = "Celsius: " + convertToCelsius(temperature);
      convertedFahrenheit.textContent = "Fahrenheit: " + temperature;
      convertedKelvin.textContent = "Kelvin: " + convertToKelvin(convertToCelsius(temperature));
    } else if (conversionType === "kelvin") {
      convertedCelsius.textContent = "Celsius: " + convertToCelsius(temperature);
      convertedFahrenheit.textContent = "Fahrenheit: " + convertToFahrenheit(convertToCelsius(temperature));
      convertedKelvin.textContent = "Kelvin: " + temperature;
    }
  }
  
  function convertToCelsius(temperature) {
    return temperature - 273.15;
  }
  
  function convertToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
  }
  
  function convertToKelvin(temperature) {
    return temperature + 273.15;
  }
  
  function resetConversion() {
    var convertedCelsius = document.getElementById("convertedCelsius");
    var convertedFahrenheit = document.getElementById("convertedFahrenheit");
    var convertedKelvin = document.getElementById("convertedKelvin");
    convertedCelsius.textContent = "";
    convertedFahrenheit.textContent = "";
    convertedKelvin.textContent = "";
  }
  