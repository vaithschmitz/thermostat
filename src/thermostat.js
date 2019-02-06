class Thermostat {

	constructor(temperature) {
		this.temperature = 20;
		this.powerSaving = true;
	}

	getTemp() {
		return this.temperature;
	}

	tempUp() {
		if (this.powerSaving == true && this.temperature === 25){
			throw new Error("Max Temp On Power Saving Mode = 25 Degrees")
		}
		else{
		this.temperature  += 1 
		}
	}

	tempDown(){
		if (this.temperature > 10){
		this.temperature -= 1}
		else {
			throw new Error("10 degrees is frosty enough, bruh!")
		}
	}
};



