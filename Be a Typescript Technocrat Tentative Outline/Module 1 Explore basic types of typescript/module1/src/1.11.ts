{
  //   const age = 100;

  //   if (age > 18) {
  //     console.log("You are an adult");
  //   } else {
  //     console.log("You are not an adult");
  //   }

  // Ternary operator
  const age = 100;
  const isAdult =
    age < 18
      ? console.log("You are not an adult")
      : console.log("You are an adult");

  //   nullis colascaling oparator
  //   const isValid = "";
  const isValid = null;
  const useType = isValid ?? "Guest";

  //using terneary operator
  const useType2 = isValid ? isValid : "Guest";
  console.log({ useType }, { useType2 });

  //Summary holo ternary operator use kore amra condition check kore value assign korte pari ar nullish coalescing operator use kore amra null or undefined value check kore value assign korte pari.

  // lets use the nullish coalescing operator in a type

  type User = {
    name: string;
    age: number;
    address: {
      road: string;
      presentAddress: string;
      permanentAddress?: string | undefined | null;
    };
  };
  const user: User = {
    name: "Rakibul Hassan",
    age: 25,
    address: {
      road: "Potenga",
      presentAddress: "Chattogram",
      permanentAddress: null,
    },
  };
  const permanentAddress = user?.address?.permanentAddress ?? "No Address";
  console.log({ permanentAddress });
}
