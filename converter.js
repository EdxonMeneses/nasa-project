document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function () {
    const targetId = this.getAttribute("href").substring(1);
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("font-bold"));
    this.classList.add("font-bold");
    document
      .querySelectorAll("div[id]")
      .forEach((div) => div.classList.add("hidden"));
    document.getElementById(targetId).classList.remove("hidden");
  });
});

function convertUnits(fromUnit, toUnit, inputValue) {
  const temperature = createConversionFunction(fromUnit, toUnit);
  return temperature(inputValue);
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fromUnit = form.getAttribute("data-from");
    console.log(fromUnit);
    const toUnit = form.getAttribute("data-to");
    const inputValue = parseFloat(form.querySelector("input").value);
    const result = convertUnits(fromUnit, toUnit, inputValue);

    const resultContainer = form.nextElementSibling;
    resultContainer.innerHTML = `Result: ${result.toFixed(2)} ${toUnit}`;
  });
});

//**** For weight *****/

document
  .getElementById("toggleWeightConversion")
  .addEventListener("click", () => {
    const weightForm = document.getElementById("weightConverterForm");
    const currentFromUnit = weightForm.getAttribute("data-from");
    const currentToUnit = weightForm.getAttribute("data-to");
    const weightInput = weightForm.querySelector("#weightValue");
    const labelInput = weightForm.querySelector("#labelInput");
    labelInput.innerHTML = `${currentFromUnit} to ${currentToUnit}`;
    weightInput.setAttribute("placeholder", `Enter value in ${currentToUnit}`);
    weightForm.setAttribute("data-from", currentToUnit);
    weightForm.setAttribute("data-to", currentFromUnit);
    weightForm.querySelector(
      "label"
    ).innerText = `${currentToUnit} to ${currentFromUnit}:`;
  });

//**** For temperature *****/

document
  .getElementById("toggleTemperatureConversion")
  .addEventListener("click", () => {
    const temperatureForm = document.getElementById("temperatureConverterForm");
    const currentFromUnit = temperatureForm.getAttribute("data-from");
    const currentToUnit = temperatureForm.getAttribute("data-to");
    const temperatureInput = temperatureForm.querySelector("#temperatureValue");
    const labelInput = temperatureForm.querySelector("#labelInput");
    labelInput.innerHTML = `${currentFromUnit} to ${currentToUnit}`;
    temperatureInput.setAttribute(
      "placeholder",
      `Enter value in ${currentToUnit}`
    );
    temperatureForm.setAttribute("data-from", currentToUnit);
    temperatureForm.setAttribute("data-to", currentFromUnit);
    temperatureForm.querySelector(
      "label"
    ).innerText = `${currentToUnit} to ${currentFromUnit}:`;
  });

//**** For distance *****/

document
  .getElementById("toggleDistanceConversion")
  .addEventListener("click", () => {
    const distanceForm = document.getElementById("distanceConverterForm");
    const currentFromUnit = distanceForm.getAttribute("data-from");
    const currentToUnit = distanceForm.getAttribute("data-to");
    const distanceInput = distanceForm.querySelector("#distanceValue");
    const labelInput = distanceForm.querySelector("#labelInput");
    labelInput.innerHTML = `${currentFromUnit} to ${currentToUnit}`;
    distanceInput.setAttribute(
      "placeholder",
      `Enter value in ${currentToUnit}`
    );
    distanceForm.setAttribute("data-from", currentToUnit);
    distanceForm.setAttribute("data-to", currentFromUnit);
    distanceForm.querySelector(
      "label"
    ).innerText = `${currentToUnit} to ${currentFromUnit}:`;
  });

// Function that give back the corresponding functions for conversion
function createConversionFunction(fromUnit, toUnit) {
  return function (value) {
    switch (`${fromUnit}-${toUnit}`) {
      case "lb-kg":
        return value * 0.453592;
      case "kg-lb":
        return value * 2.20462;
      case "mi-km":
        return value * 1.60934;
      case "km-mi":
        return value * 0.621371;
      case "°C-°F":
        return (value * 9) / 5 + 32;
      case "°F-°C":
        return ((value - 32) * 5) / 9;
      default:
        console.log("Invalid conversion units.");
        return null;
    }
  };
}
