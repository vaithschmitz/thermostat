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
});