# Pick and Omit: DRY Code Without Type Duplication

## Introduction

Without `Pick` and `Omit`, We would copy interface properties across our codebase. When the master interface changes, we must update all copies—violating DRY and inviting bugs.

## What is Pick?

`Pick<T, K>` selects specific properties from type `T`:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}

type LoginForm = Pick<User, "email" | "password">;
type UserCard = Pick<User, "id" | "name" | "email">;
```

## What is Omit?

`Omit<T, K>` excludes specific properties:

```typescript
type PublicProfile = Omit<User, "password">;
type CreateUserForm = Omit<User, "id" | "createdAt">;
```

## Benefits

- **Single source of truth:** Changes to User automatically propagate
- **Less code:** No property repetition
- **Type safety:** Automatic synchronization
- **Intent clarity:** Code shows which fields are used where

## Conclusion

We use `Pick` for small subsets, `Omit` for small exclusions. Both keep our types DRY and maintainable.
