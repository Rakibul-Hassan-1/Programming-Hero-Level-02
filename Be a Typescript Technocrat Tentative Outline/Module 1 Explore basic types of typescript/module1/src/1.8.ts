{
  //Obj Destrcuturing

  const person = {
    name: "Rakibul Hassan",
    age: 25,
    phone: {
      home: "01700000000",
      office: "01800000000",
    },
  };

  const { name } = person;
  const {
    age,
    phone: { office: string },
  } = person;

  //arry Destrcuturing
  const bros: string[] = ["Rakib", "Saiful", "Sakib", "Akib", "Akif", "Akram"];
  const [, second, ...rest] = bros;
  console.log(second);
}
