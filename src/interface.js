function $(x) { return document.getElementById(x); }

const thermostat = new Thermostat();

function currentStats() {
  $('temperature').textContent = (thermostat.temperature);
  $('nrg-usg').textContent = (thermostat.getEnergy());
  if (thermostat.temperature <= 17) {
    $('nrg-usg').style.color = '#21FE06FF';
  } else if (thermostat.temperature <= 25) {
    $('nrg-usg').style.color = '#FDC32BFF';
  } else {
    $('nrg-usg').style.color = '#FB0006FF';
  }
}

currentStats();

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