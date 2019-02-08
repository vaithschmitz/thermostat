function $(x) { return document.getElementById(x); }

const thermostat = new Thermostat();

function currentStats() {
  $('temperature').textContent = (thermostat.temperature);
  $('nrg-usg').textContent = (thermostat.getEnergy());
  if (thermostat.temperature <= 17) {
    $('nrg-usg').style.color = '#21FE06FF';
  } else if (thermostat.temperature <= 25) {
    $('nrg-usg').style.color = 'orange';
  } else {
    $('nrg-usg').style.color = '#FB0006FF';
  }
}

function populateWeather() {
  place = $('user-loc').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=68d94d5bb085aaebdda7654eb41e9176`)

    .then(function(response) {
      return (response.json());
    })
    .then(function(myJson) {
      data = myJson;

      $('user-loc').value = '';
      $('btn-weather').style.visibility = 'hidden';

      if (data.cod === '404') {
        alert("Please enter a valid city.")
      } else {
        $('city').textContent = data.name
        $('curtemp').textContent = `${Math.round(data.main.temp)}°C`
        $('weathdescrip').textContent = data.weather[0].description
        $('mintemp').textContent = `min: ${Math.round(data.main.temp_min)}°C`
        $('maxtemp').textContent = `max: ${Math.round(data.main.temp_max)}°C`
        $('humidity').textContent = `humidity: ${data.main.humidity}%`
        $('wind').textContent = `wind: ${data.wind.speed} km/h`
      }
    });
}

function clearError() {
  $('limit-errors').textContent = "";
}

function showSlider(){
  $('myRange').style.visibility = 'visible';
}

function hideSlider() {
  $('myRange').style.visibility = 'hidden';
  setTimeout(showSlider, 1500)
}

currentStats();

document.addEventListener('DOMContentLoaded', () => {
  $('user-loc').value = 'London';
  populateWeather();
  $('user-loc').value = ''
})

$('user-loc').addEventListener('input', () => {
  if ($('user-loc').value.length < 3) {
    $('btn-weather').disabled = true;
    $('btn-weather').style.visibility = 'hidden';
  } else {
    $('btn-weather').disabled = false;
    $('btn-weather').style.visibility = 'visible';
  }
})

$('btn-weather').addEventListener('click', () => {
  populateWeather();
});

$('myRange').addEventListener('input', () => {
  let val = $('myRange').value
  if (thermostat.temperature <= 10) {
    hideSlider()
    $('limit-errors').textContent = "Minimum Temperature."
    currentStats();
    $('myRange').min = '10';
    thermostat.changeTemp(val)
    setTimeout(clearError, 1500)
  } else if (thermostat.temperature >= 25 && thermostat.powerSaving === true) {
    hideSlider()
    $('limit-errors').textContent = "Disable Power Saving Mode to increase temperature."
    currentStats();
    $('myRange').max = '25';
    thermostat.changeTemp(val)
    setTimeout(clearError, 1500)
  } else if (thermostat.temperature >= 32 && thermostat.powerSaving === false) {
    hideSlider()
    $('limit-errors').textContent = "Maximum Temperature."
    currentStats();
    $('myRange').max = '32';
    thermostat.changeTemp(val)
    setTimeout(clearError, 1500)
  } else {
    thermostat.changeTemp(val)
    currentStats();
  }
})

$('temp-reset').addEventListener('click', () => {
  thermostat.reset();
  $('myRange').value = 20;
  currentStats();
})

$('pwrsv').addEventListener('click', () => {
  thermostat.toggleMode();

  if ($('pwrsv').className == 'pwrsvon') {
    $('pwrsv').className = 'pwrsvoff'
    $('myRange').max = '32';
  } else {
    $('pwrsv').className = 'pwrsvon'
    thermostat.temperature = 25;
    $('myRange').value = 25
    currentStats();
  }
  $('pwrsv').textContent = (thermostat.getMode());
})