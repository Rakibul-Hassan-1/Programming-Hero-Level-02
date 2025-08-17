{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
      return input.toUpperCase();
    }
    return input.toLowerCase();
  }

  console.log(formatString("Hello")); // Should output: "hello"
  console.log(formatString("Hello", true)); // Should output: "HELLO"
  console.log(formatString("Hello", false)); // Should output: "hello"

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books));
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

  class Car {
    constructor(
      public make: string,
      public year: number,
      public model: string
    ) {}

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
  console.log(myCar.getModel()); // Output: "Model: Corolla"

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    }
    return value;
  }

  console.log(processValue("hello")); // Output: 5
  console.log(processValue(20)); // Output: 20

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    return products.reduce(
      (max, current) => (current.price > max.price ? current : max),
      products[0]
    );
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  console.log(getMostExpensiveProduct(products));
  // Output: { name: "Bag", price: 50 }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    }
    return "Weekday";
  }
  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"

  async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }

  (async () => {
    try {
      const result1 = await squareAsync(4);
      console.log(result1); // Output after 1s: 16
      await squareAsync(-3); // This will throw an error
    } catch (error: any) {
      console.log("Error:", error.message); // Output: Error: Negative number not allowed
    }
  })();
}
