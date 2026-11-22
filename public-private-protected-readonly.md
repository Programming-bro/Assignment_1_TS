# Public vs. Private vs. Protected in TypeScript

## Overview

In Object-Oriented Programming (OOP) with TypeScript, **access modifiers** control the visibility and accessibility of class properties and methods:

* **`public`:** The property or method can be accessed from anywhere in the code (inside the class, inside subclasses, and from outside instances). This is the default modifier if none is specified.
* **`private`:** The property or method is only accessible within the class where it is declared. It cannot be accessed from outside the class, though you can expose its value safely using a `get` (getter) method.
* **`protected`:** Similar to `private`, a `protected` property cannot be accessed from outside instances, **except** it *can* be accessed within the class itself and any child (inherited) subclasses.
* **`readonly`:** A property modifier used to prevent accidental modifications. Once initialized, a `readonly` property can only be read and cannot be reassigned.

---

## Code Example

```typescript
class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
    private id: number,
    readonly company: string = "Tech Corp"
  ) {}

  // Getter to safely access the private 'id' property
  get employeeId(): number {
    return this.id;
  }
}
```
