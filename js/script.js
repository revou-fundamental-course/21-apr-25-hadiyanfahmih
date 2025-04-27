document.getElementById('temperatureForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let tempInput = document.getElementById('temperatureInput').value.trim();

  tempInput = tempInput.replace(",", ".");

  const conversionType = document.getElementById('conversionType').value;
  const resultSection = document.getElementById('resultSection');
  const resultText = document.getElementById('conversionResult');
  const explanation = document.getElementById('explanation');

  if (tempInput === '' || isNaN(tempInput)) {
    alert('Masukkan angka suhu yang tepat!');
    return;
  }

  const temperature = parseFloat(tempInput);
  let convertedTemp, explanationText;

  if (conversionType === 'toFahrenheit') {
    convertedTemp = (temperature * 9 / 5) + 32;
    explanationText = `${temperature}°C sama dengan ${convertedTemp.toFixed(2)}°F. Konversi menggunakan rumus: (°C × 9/5) + 32.`;
  } else {
    convertedTemp = (temperature - 32) * 5 / 9;
    explanationText = `${temperature}°F sama dengan ${convertedTemp.toFixed(2)}°C. Konversi menggunakan rumus: (°F - 32) × 5/9.`;
  }

  resultText.textContent = convertedTemp.toFixed(2);
  explanation.textContent = explanationText;
  resultSection.classList.remove('hidden');
});

document.getElementById('temperatureInput').addEventListener('input', function (e) {
  this.value = this.value.replace(/[^0-9.,]/g, '');
});
