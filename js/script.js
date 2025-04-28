const switchButton = document.getElementById('switchButton');
const form = document.getElementById('temperatureForm');
const input = document.getElementById('temperatureInput');
const resultDiv = document.getElementById('result');
const explanationDiv = document.getElementById('explanation');

let isCtoF = true;

function convertTemperature() {
  let userInput = input.value.trim();
  userInput = userInput.replace(/\s+/g, '');

  const commaCount = (userInput.match(/,/g) || []).length;
  const dotCount = (userInput.match(/\./g) || []).length;

  if (commaCount > 1 || dotCount > 1 || (commaCount + dotCount) > 1) {
    resultDiv.textContent = "Input tidak valid!";
    explanationDiv.textContent = "";
    return;
  }

  userInput = userInput.replace(',', '.');

  const temperature = parseFloat(userInput);

  if (isNaN(temperature)) {
    resultDiv.textContent = "Input tidak valid!";
    explanationDiv.textContent = "";
    return;
  }

  let result, formula, calculation, basicConversion, heaven;

  if (isCtoF) {
    result = (temperature * 9 / 5) + 32;
    resultDiv.textContent = `${temperature}°C = ${result.toFixed(2)}°F`;

    formula = "Rumus: (°C × 9/5) + 32 = °F";
    calculation = `Perhitungan: (${temperature} × 9/5) + 32 = ${result.toFixed(2)}°F`;

    basicConversion = "Konversi dasar: 1°C = 33.8°F";
    heaven = "Semoga kita semua dapat masuk surga aamiin";
  } else {
    result = (temperature - 32) * 5 / 9;
    resultDiv.textContent = `${temperature}°F = ${result.toFixed(2)}°C`;

    formula = "Rumus: (°F - 32) × 5/9 = °C";
    calculation = `Perhitungan: (${temperature} - 32) × 5/9 = ${result.toFixed(2)}°C`;

    basicConversion = "Konversi dasar: 1°F = -17.22°C";
    heaven = "Semoga kita semua dapat masuk surga aamiin";
  }

  explanationDiv.innerHTML = `
    ${formula}<br>
    ${calculation}<br>
    ${basicConversion}<br><br>
    ${heaven}
  `;
}

switchButton.addEventListener('click', function () {
  isCtoF = !isCtoF;
  switchButton.textContent = isCtoF ? "Celsius ⇄ Fahrenheit" : "Fahrenheit ⇄ Celsius";

  if (input.value.trim() !== '') {
    convertTemperature();
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  convertTemperature();
});
