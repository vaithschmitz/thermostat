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
});