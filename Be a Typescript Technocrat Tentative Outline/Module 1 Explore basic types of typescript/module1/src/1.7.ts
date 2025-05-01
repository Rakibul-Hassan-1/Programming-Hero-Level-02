{
  //spread operator
  const bros1: string[] = ["Rakib", "Saiful", "Sakib"];
  const bros2: string[] = ["Akib", "Akif", "Akram"];
  bros1.push(...bros2);

  //object spread operator
  const list1 = {
    typeScript: "Rakib",
    redux: "Saiful",
    react: "Sakib",
  };
  const list2 = {
    nextJs: "Akib",
    nodeJs: "Akif",
    expressJs: "Akram",
  };

  const totalList = {
    ...list1,
    ...list2,
  };

  const greetings = (...frineds: string[]) => {
    // console.log(`Hello my friends ${frineds}`);
    frineds.forEach((frined: string) =>
      console.log(`Hello my friend ${frined}`)
    );
  };
  greetings("Rakib", "Saiful", "Sakib", "Akib", "Akif", "Akram");
}
