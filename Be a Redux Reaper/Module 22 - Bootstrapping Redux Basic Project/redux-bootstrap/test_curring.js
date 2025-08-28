//function curring muloto parameter komay ekta fuction er
const totalPrice = (discount) => (amount) => amount - amount * discount;
// behind the seen
// const totalPrice = (discount) => {
//   return (amount) => {
//     return amount - amount * discount;
//   };
// };

const withDiscount = totalPrice(0.3);

console.log(withDiscount(100));
console.log(withDiscount(10));
console.log(withDiscount(56));
