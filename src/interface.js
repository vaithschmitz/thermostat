function $(x) { return document.getElementById(x); }

const thermostat = new Thermostat();

function currentStats() {
  $('temperature').textContent = (thermostat.temperature);
  $('nrg-usg').textContent = (thermostat.getEnergy());
  if (thermostat.temperature <= 17) {
    $('nrg-usg').style.color = 'green';
  } else if (thermostat.temperature <= 25) {
    $('nrg-usg').style.color = 'orange';
  } else {
    $('nrg-usg').style.color = 'red';
  }
}

currentStats();

$('temp-up').addEventListener('click', () => {
  if (thermostat.temperature >= 25 && thermostat.powerSaving === true) {
    alert("Disable Power Saving Mode to increase temperature.")
  } else if (thermostat.temperature >= 32 && thermostat.powerSaving === false) {
    alert("That's hot enough. If you want to sweat, go to the gym.")
  } else {
    thermostat.tempUp();
    currentStats();
  }
})

$('temp-down').addEventListener('click', () => {
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
  }
  $('pwrsv').textContent = (thermostat.getMode());
})