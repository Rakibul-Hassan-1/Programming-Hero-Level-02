{
  // nullable types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const result = (value * 1000) / 3600;
      console.log(`Speed in meter per second is ${result} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const ans = (parseFloat(result) * 1000) / 3600;
      console.log(`Speed in meter per second is ${ans} ms^-1`);
    } else {
      console.log("Error: value is not a number");
    }
  };
  getSpeedInMeterPerSecond("1000 khm^-1");

  const throwError = (msg:string)=>{
    throw new Error(msg);
  }
  throwError("Ne error kha, Tui beta bhul bhal code koros!!")
}
