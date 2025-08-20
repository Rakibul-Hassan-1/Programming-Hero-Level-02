{
  // Generic type in typeScript

  //   const nam = ["Rakibul", "Sakib", "Shakib"];
  const nam: Array<string> = ["Rakibul", "Sakib", "Shakib"];

  //   const age = [23, 24, 25];
  const age: Array<number> = [23, 24, 25];
  //   const bol = [true, false, true];
  const bol: Array<boolean> = [true, false, true];

  //   Array of objects
  const car: Array<{ name: string; price: number | string }> = [
    {
      name: "BMW",
      price: 20000,
    },
    {
      name: "Benz",
      price: 30000,
    },
    {
      name: "Toyota",
      price: 40000,
    },
  ];
}
