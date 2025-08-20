{
  // type assertion
  let nam: any;
  nam = "Rakibul Hassan";
  let value = (nam as string).length;
  console.log(value);

  //kg to gram
  const kgToGm = (kg: string | number) => {
    if (typeof kg === "string") {
      const value = parseFloat(kg) * 1000;
      return `Converted value: ${value}`;
    }
    if (typeof kg === "number") {
      return kg * 1000;
    }
  };
  const result = kgToGm("");
  console.log(result);
}
