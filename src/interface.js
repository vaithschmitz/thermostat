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


$('user-loc').addEventListener('input', function success() {
  if ($('user-loc').value.length < 3) { 
    $('btn-weather').disabled = true;
    $('btn-weather').style.visibility = 'hidden';}
  else { 
    $('btn-weather').disabled = false;
    $('btn-weather').style.visibility = 'visible';
  }
})



$('btn-weather').addEventListener('click', function getWeather(){
  let place = $('user-loc').value;
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=68d94d5bb085aaebdda7654eb41e9176`)

  .then(function(response) {
    return(response.json());
  })
  .then(function(myJson) {
    let city = myJson.name;
    let currentTemp = Math.round(myJson.main.temp);
    let weatherDescrip = myJson.weather[0].description;
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
