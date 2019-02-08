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

currentStats();

let city;
let currentTemp;
let weatherDescrip;

$('btn-weather').addEventListener('click', function getWeather(){
  fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=68d94d5bb085aaebdda7654eb41e9176')

  .then(function(response) {
    return(response.json());
  })
  .then(function(myJson) {
    city = myJson.name;
    currentTemp = myJson.main.temp;
    weatherDescrip = myJson.weather[0].description;
    $('weather').textContent = (`In ${city}, it currently is ${currentTemp} degrees with ${weatherDescrip}.`)
  }); 
});

$('btn-up').addEventListener('click', () => {
  if (thermostat.temperature >= 25 && thermostat.powerSaving === true) {
    alert("Disable Power Saving Mode to increase temperature.")
  } else if (thermostat.temperature >= 32 && thermostat.powerSaving === false) {
    alert("That's hot enough. If you want to sweat, go to the gym.")
  } else {
    thermostat.tempUp();
    currentStats();
  }
})


$('btn-down').addEventListener('click', () => {
  if (thermostat.temperature <= 10) {
    alert("That's cold enough. Wouldn't want you to catch a cold.")
  } else {
    thermostat.tempDown();
    currentStats();
  }
})

$('temp-reset').addEventListener('click', () => {
  thermostat.reset();
  currentStats();
})

$('pwrsv').addEventListener('click', () => {
  thermostat.toggleMode();

  if ($('pwrsv').className == 'pwrsvon') {
    $('pwrsv').className = 'pwrsvoff'
  } else {
    $('pwrsv').className = 'pwrsvon'
    currentStats();
  }
  $('pwrsv').textContent = (thermostat.getMode());
})
