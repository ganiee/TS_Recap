Let me summarize best practices for variable naming and type definitions in TypeScript and provide concise examples.## Quick summary ✅
Concise rules for readable, safe TypeScript: use descriptive names, follow consistent naming conventions, prefer type inference for locals and explicit types for exported/public APIs, avoid any, and leverage readonly and strict compiler options.

Naming conventions 🔤
Variables / functions / params: camelCase (e.g., userCount, getTotal()).
Constants: UPPER_SNAKE or const + camelCase for module-scoped constants (MAX_RETRIES or defaultTimeout).
Types / Interfaces / Classes / Enums: PascalCase (User, UserService, UserRole).
Boolean vars: prefix with is/has/should/can (isActive, hasAccess).
Generics: single letter for simple generics (T, K, V), descriptive when needed (TUser, TResponse).
Avoid Hungarian notation and unnecessary abbreviations; use clear, short names.
Type annotations & style 🔧
Local variables: rely on type inference when obvious:
const count = 0 (no : number needed).
Public API / exports / function returns / complex values: annotate explicitly:
export function fetchUser(id: string): Promise<User> { ... }
Prefer unknown to any for external input; validate then narrow.
Use readonly to signal immutability:
readonly id: string, readonly string[] or ReadonlyArray<string>
Use as const for literal const inference.
Types vs Interfaces — guidelines 📐
Interface: ideal for object shapes and extendable contracts:
interface User { id: string; name: string }
Type alias: good for unions, tuples, mapped types:
type ID = string | number
type Response<T> = { ok: boolean; data: T }
Both are fine for object types; prefer interface for public API shape and type for composability.
Generics & reusable types ♻️
Keep generic parameters minimal and meaningful:
function map<T, U>(arr: T[], fn: (t: T) => U): U[]
Use bounds when needed: T extends Base.
Tooling & rules 🛠️
Enable strict compiler options: "strict": true in tsconfig.json.
Use ESLint with @typescript-eslint and a naming-convention rule to enforce style.
Add JSDoc for non-obvious types or domain rules.
Note: Prefer explicit types on exported/public surfaces and rely on inference for simple local values.

Short checklist ✍️
camelCase for vars/functions, PascalCase for types/classes. ✅
Explicit types on exports/APIs, inference for locals. ✅
Use unknown not any, prefer strict mode. ✅
Use readonly and as const for immutability. ✅
Use ESLint + TypeScript rules to enforce conventions. ✅
If desired, provide a small lint config and a few project examples to enforce these rules.

