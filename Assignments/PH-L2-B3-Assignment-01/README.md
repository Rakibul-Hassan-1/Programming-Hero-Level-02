# TypeScript Deep Dive: Interfaces vs Types & Understanding `any`, `unknown`, and `never`

## 1. What are some differences between `interfaces` and `types` in TypeScript?

TypeScript offers two powerful ways to describe the shape of objects: **interfaces** and **type aliases**. While they often seem interchangeable, there are important differences and best-use scenarios for each.

### Interfaces

- **Extensibility:** Interfaces are designed for extension. You can use the `extends` keyword to build on existing interfaces, and even merge multiple declarations of the same interface (declaration merging).
- **Object Shape:** Interfaces are best for describing the structure of objects and classes.
- **Implements:** Classes can implement interfaces, enforcing a contract for class members.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
}

const rakib: Employee = {
  name: "Rakib Hassan",
  age: 30,
  employeeId: "123",
};
```

### Types

- **Versatility:** Type aliases can represent not just object shapes, but also unions, intersections, primitives, tuples, and more.
- **No Declaration Merging:** Unlike interfaces, you cannot declare a type alias multiple times.
- **Advanced Types:** Types are ideal for complex type operations, such as unions and intersections.

```typescript
type Status = "active" | "inactive";
type Point = { x: number; y: number };
type LabeledPoint = Point & { label: string };

const p: LabeledPoint = { x: 1, y: 2, label: "A" };
```

### When to Use Which?

- Use **interfaces** for defining the shape of objects, especially when you expect them to be extended or implemented.
- Use **type aliases** for unions, intersections, primitives, or when you need more flexibility.

---

## 2. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

TypeScript provides three special types that serve distinct purposes in type safety and error handling: `any`, `unknown`, and `never`.

### `any`

- **Flexibility:** The `any` type allows you to bypass TypeScript's type checking. Variables of type `any` can hold any value and perform any operation without type errors.
- **Use Case:** Useful when you need to work with dynamic data or integrate with untyped JavaScript libraries. However, overuse of `any` can lead to runtime errors and loss of type safety.

```typescript
let dynamicValue: any = 42;
dynamicValue = "Hello"; // No error
dynamicValue.toFixed(2); // No error, but could crash at runtime
```

### `unknown`

- **Type Safety:** The `unknown` type is a type-safe alternative to `any`. Variables of type `unknown` can hold any value, but you must perform type checking or type assertion before using them.
- **Use Case:** Ideal for handling values of uncertain types, ensuring that you validate the type before performing operations.

```typescript
let uncertainValue: unknown = 42;
// uncertainValue.toFixed(2); // Error: Object is of type 'unknown'
if (typeof uncertainValue === "number") {
  console.log(uncertainValue.toFixed(2)); // Safe to use
}
```

### `never`

- **Impossible Values:** The `never` type represents values that never occur. It is used to indicate that a function never returns (e.g., throws an error) or that a variable cannot have any value.
- **Use Case:** Useful for functions that always throw errors or for exhaustive type checking in switch statements.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function exhaustiveCheck(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}

// Example of exhaustive checking
type Status = "success" | "error";
function handleStatus(status: Status) {
  switch (status) {
    case "success":
      return "Operation succeeded";
    case "error":
      return "Operation failed";
    default:
      return exhaustiveCheck(status); // Ensures all cases are handled
  }
}
```

### Why These Types Matter

- **`any`:** Use sparingly to avoid losing type safety.
- **`unknown`:** Use when you need to handle values of uncertain types safely.
- **`never`:** Use to indicate impossible scenarios and ensure exhaustive type checking.

---
