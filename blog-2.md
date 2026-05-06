# The Four Pillars of OOP in TypeScript: Managing Complexity at Scale

## Introduction

Object-Oriented Programming's four pillars—Inheritance, Polymorphism, Abstraction and Encapsulation—manage complexity in large applications. Together, they organize code logically, prevent duplication, and make systems scalable.

## Pillar 1: Inheritance

Share code through parent-child relationships:

```typescript
class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

## Pillar 2: Polymorphism

Different objects implement the same interface:

```typescript
function animalConcert(animals: Animal[]) {
  animals.forEach((a) => a.makeSound());
}
```

## Pillar 3: Abstraction

Hide complexity behind simple interfaces. Abstract classes define contracts:

```typescript
abstract class Animal {
  abstract makeSound(): void;
}
```

## Pillar 4: Encapsulation

Protect data with access modifiers:

```typescript
class BankAccount {
  private balance: number = 0; // Hidden

  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }
}
```

## Conclusion

These pillars create organized, maintainable, scalable systems that prevent bugs and reduce complexity across thousands of lines of code.
