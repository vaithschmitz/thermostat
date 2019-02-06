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
			return "Power Saving Mode"
		}
		else {
			return "Regular Mode"
		}
	}

	tempUp() {
		if (this.powerSaving == true && this.temperature === 25){
			throw new Error("Max Temp On Power Saving Mode = 25 Degrees")
		}
		else if (this.powerSaving == false && this.temperature === 32){
			throw new Error("Max Temp = 32 Degrees")
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

	reset() {
		this.temperature = 20;
	}

	getEnergy() {
		if (this.temperature < 18){
			return "low-usage"
		}
		else if (this.temperature < 25){
			return "medium-usage"
		}
		else {
			return "high-usage"
		}
	}
};



