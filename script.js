function convertTemperature(fromUnit, toUnit) {
  var inputValue = parseFloat(document.getElementById("celsius").value);
  var convertedValue;

  switch (fromUnit) {
    case "Celsius":
      if (toUnit === "Fahrenheit") {
        convertedValue = (inputValue * 9 / 5) + 32;
      } else if (toUnit === "Kelvin") {
        convertedValue = inputValue + 273.15;
      } else if (toUnit === "Rankine") {
        convertedValue = (inputValue + 273.15) * 9 / 5;
      }
      break;

    // Add cases for other conversion options here if needed

    default:
      console.log("Invalid conversion options");
  }

  if (convertedValue !== undefined) {
    document.getElementById("result").innerHTML = inputValue + " " + fromUnit + " is equal to " + convertedValue.toFixed(2) + " " + toUnit + ".";
  } else {
    document.getElementById("result").innerHTML = "";
  }
}

// Clear the result when the input value changes
document.getElementById("celsius").addEventListener("input", function() {
  document.getElementById("result").innerHTML = "";
});
