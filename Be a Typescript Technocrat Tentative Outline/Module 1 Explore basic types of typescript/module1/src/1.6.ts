{
  //normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  //arrow function
  const addArrow = (num1: number, num2: number) => num1 + num2;

  // object => function => method

  const odj = {
    name: "Rakib",
    bal: 1000,
    addBal(bal: number): string | number {
      this.bal += bal;
      return `You current balance is ${this.bal}`;
    },
  };

  //callback function

  const arr: number[] = [2, 4, 6, 7];

  const multiArr: number[] = arr.map((num): number => num * num);
}
