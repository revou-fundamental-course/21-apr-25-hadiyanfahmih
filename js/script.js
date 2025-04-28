const switchButton = document.getElementById('switchButton');
const conversionType = document.getElementById('conversionType');
const form = document.getElementById('temperatureForm');
const input = document.getElementById('temperatureInput');
const resultDiv = document.getElementById('result');
const explanationDiv = document.getElementById('explanation');

let isCtoF = true; // Mulai dari Celsius ke Fahrenheit

switchButton.addEventListener('click', function () {
  isCtoF = !isCtoF;
  conversionType.textContent = isCtoF ? "Celsius ke Fahrenheit" : "Fahrenheit ke Celsius";
  resultDiv.textContent = "";
  explanationDiv.textContent = "";
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const temperature = parseFloat(input.value);

  if (isNaN(temperature)) {
    resultDiv.textContent = "Input tidak valid!";
    explanationDiv.textContent = "";
    return;
  }

  let result, formula, calculation, basicConversion;

  if (isCtoF) {
    result = (temperature * 9 / 5) + 32;
    resultDiv.textContent = `${temperature}°C = ${result.toFixed(2)}°F`;

    formula = "Rumus: (°C × 9/5) + 32 = °F";
    calculation = `Perhitungan: (${temperature} × 9/5) + 32 = ${result.toFixed(2)}°F`;

    basicConversion = "Konversi dasar: 1°C = 33.8°F";
  } else {
    result = (temperature - 32) * 5 / 9;
    resultDiv.textContent = `${temperature}°F = ${result.toFixed(2)}°C`;

    formula = "Rumus: (°F - 32) × 5/9 = °C";
    calculation = `Perhitungan: (${temperature} - 32) × 5/9 = ${result.toFixed(2)}°C`;

    basicConversion = "Konversi dasar: 1°F = -17.22°C";
  }

  explanationDiv.innerHTML = `
    ${formula}<br>
    ${calculation}<br>
    ${basicConversion}
  `;
});
