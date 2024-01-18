document.addEventListener("DOMContentLoaded", function() {
  // Set default values
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('kelvin').value = '';

  // Add input event listeners
  document.getElementById('celsius').addEventListener('input', convert('celsius'));
  document.getElementById('fahrenheit').addEventListener('input',convert('fahrenheit'));
  document.getElementById('kelvin').addEventListener('input',convert('kelvin'));

});

function convert(type) {
  let celsius = document.getElementById('celsius').value;
  let fahrenheit = document.getElementById('fahrenheit').value;
  let kelvin = document.getElementById('kelvin').value;

  if (celsius === '') {
      fahrenheit = '';
      kelvin = '';
  } else {
      celsius = parseFloat(celsius);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
  }

  document.getElementById('fahrenheit').value = fahrenheit === '' ? '' : fahrenheit.toFixed(2);
  document.getElementById('kelvin').value = kelvin === '' ? '' : kelvin.toFixed(2);

  if (type === 'fahrenheit') {
      if (fahrenheit === '') {
          celsius = '';
          kelvin = '';
      } else {
          fahrenheit = parseFloat(fahrenheit);
          celsius = (fahrenheit - 32) * 5/9;
          kelvin = (fahrenheit + 459.67) * 5/9;
      }

      document.getElementById('celsius').value = celsius === '' ? '' : celsius.toFixed(2);
      document.getElementById('kelvin').value = kelvin === '' ? '' : kelvin.toFixed(2);
  } else if (type === 'kelvin') {
      if (kelvin === '') {
          celsius = '';
          fahrenheit = '';
      } else {
          kelvin = parseFloat(kelvin);
          celsius = kelvin - 273.15;
          fahrenheit = (kelvin * 9/5) - 459.67;
      }

      document.getElementById('celsius').value = celsius === '' ? '' : celsius.toFixed(2);
      document.getElementById('fahrenheit').value = fahrenheit === '' ? '' : fahrenheit.toFixed(2);
  }
}
