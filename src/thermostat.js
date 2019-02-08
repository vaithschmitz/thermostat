class Thermostat {

	constructor(temperature) {
		this.temperature = 20;
		this.powerSaving = true;
	}

	getTemp() {
		return this.temperature;
	}

	getMode() {
		if (this.powerSaving === true){
			return "Power Saving Enabled"
		}
		else {
			return "Power Saving Disabled"
		}
	}

	toggleMode() {
		if (this.powerSaving === true){
			this.powerSaving = false
		}
		else{
			this.powerSaving = true;
			this.temperature = 25;
		}
	}

	changeTemp(val) {
		this.temperature = val
	}

	reset() {
		this.temperature = 20;
	}

	getEnergy() {
		if (this.temperature < 18){
			return "Energy Usage: \nLow"
		}
		else if (this.temperature <= 25){
			return "Energy Usage: \nMedium"
		}
		else {
			return "Energy Usage: \nHigh"
		}
	}
};


