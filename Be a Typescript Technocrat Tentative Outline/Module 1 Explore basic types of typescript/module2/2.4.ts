{
  // Interface Generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X; // bike ache kina, jodi thake tahole seta bosbe, ar na thakle null hobe
  }

  const goiribDev: Developer<{
    brand: string;
    model: string;
    releaseYear: number;
  }> = {
    name: "Rakib",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch Series 7",
      releaseYear: 2021,
    },
  };

  const richDev: Developer<{
    brand: string;
    model: string;
    releaseYear: number;
    price: number;
    color: string;
  }> = {
    name: "Hassan",
    computer: {
      brand: "HP",
      model: "HP Pro",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy Watch 4",
      releaseYear: 2025,
      price: 300,
      color: "Black",
    },
  };
}
