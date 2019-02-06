describe("Features", () => {
	let thermostat; 

	thermostat = new Thermostat();

	it("should start at 20 degrees", () => {
		expect (thermostat.getTemp()).toBe(20)
	})

});


