class Thermostat {

	constructor(temperature) {
		this.temperature = 20;
	}

	getTemp() {
		return this.temperature;
	}

	tempUp() {
		this.temperature  += 1 
	}

	tempDown(){
		this.temperature -= 1
	}
};



