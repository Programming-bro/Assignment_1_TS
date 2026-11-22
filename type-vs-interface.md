# Type Alias vs. Interface

## Overview

In TypeScript, both **Type Aliases** and **Interfaces** allow you to define custom shapes and types for your data, though they serve slightly different primary purposes:

* **Type Alias:** A user-defined type that lets you assign a name to any type, including custom object shapes, primitives, union types, and literal types.
* **Interface:** A structured blueprint specifically designed for defining the shape of objects and classes.

---

## Key Differences & Use Cases

* **Primary Use:** Use **Type Aliases** mainly for literal types, union types, and tuples. Use **Interfaces** when dealing primarily with object structures.
* **Extending & Combining:** 
  * An **Interface** can inherit properties from another interface using the `extends` keyword (similar to OOP inheritance).
  * A **Type Alias** can combine multiple types together using the intersection (`&`) operator.

---

## Code Examples

### Type Alias

```typescript
type Employee = {
  name: string;
  salary: number;
};
```

### Interface

```typescript
interface Employee {
  name: string;
  salary: number;
}
```
