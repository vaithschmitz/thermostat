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
		if (this.temperature > 10){
		this.temperature -= 1}
		else {
			throw new Error("10 degrees is frosty enough, bruh!")
		}
	}
};



