describe("Features", () => {
  let thermostat;

  beforeEach(()=>{
  thermostat = new Thermostat();
  });

  it("should start at 20 degrees", () => {
    expect(thermostat.getTemp()).toBe(20)
  })

  it("can be increased", () => {
  	thermostat.tempUp()
  	expect(thermostat.getTemp()).toBe(21)
  })
});