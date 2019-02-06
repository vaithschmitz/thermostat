describe("Features", () => {
  let thermostat;

  beforeEach(()=>{
  thermostat = new Thermostat();
  });

  it("should start at 20 degrees", () => {
    expect(thermostat.getTemp()).toBe(20)
  })

  it("temperature can be increased", () => {
  	thermostat.tempUp()
  	expect(thermostat.getTemp()).toBe(21)
  })

  it("temperature can be decreased", () => {
  	thermostat.tempDown()
  	expect(thermostat.getTemp()).toBe(19)
  })

  it("temperature can't be decreased below 10", ()=>{
    thermostat.temperature = 10
    expect(() => {
    	thermostat.tempDown()}).toThrow(new Error("10 degrees is frosty enough, bruh!"))
  });

  it("on 'power saving' temperature can't be increased past 25 degrees", () => {
  	thermostat.powerSaving = true
  	thermostat.temperature = 25
  	expect(() => {
  		thermostat.tempUp()}).toThrow(new Error("Max Temp On Power Saving Mode = 25 Degrees"))
  });

  it("on 'regular mode' temperature can't be increased past 32 degrees", () => {
  	thermostat.powerSaving = false
  	thermostat.temperature = 32
  	expect(() => {
  		thermostat.tempUp()}).toThrow(new Error("Max Temp = 32 Degrees"))
  });

  it("'power saving' is on by default", () => {
  	expect(thermostat.getMode()).toBe('Power Saving Mode') 
  })

});