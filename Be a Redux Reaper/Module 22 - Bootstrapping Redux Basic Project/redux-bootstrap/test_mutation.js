import { produce } from "immer";
// functional programming

const updateDate = () => {
  const currentDate = new Date();
  console.log(currentDate);
};

// updateDate();

const add = (a, b) => {
  return a + b;
};

// console.log(add(5, 10));

//mutation objects
const employee = {
  name: "Rakib",
  address: {
    country: "Bangladesh",
    city: "Chattogram",
  },
};

// const employee2 = employee; // reference type soho hold kore ache ekhane
// const employee2 = { ...employee, name: "Kawsar" }; //reference type theke primitive type e niye asha

// employee2.name = "Kawsar";

// console.log(employee);
// console.log(employee2);
// console.log(employee === employee2);

//immer
const employee2 = produce(employee, (draft) => {
  draft.name = "Kawsar";
  draft.address.city = "Sylhet";
});

console.log(employee);
console.log(employee2);
// console.log(employee === employee2);
