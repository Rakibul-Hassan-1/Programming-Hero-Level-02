{
  //function with Generic type
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Rakib");
  const res2 = createArrayWithGeneric<boolean>(true);
}
