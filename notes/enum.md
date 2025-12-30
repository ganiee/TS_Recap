An enum in TypeScript is a way to define a set of named constants (numeric or string) that can be used as a typed set of values. Enums compile to JS objects at runtime and make code more readable compared to raw literals.

Key points:

Numeric enums (default) auto-assign numbers and support reverse mapping.
String enums map names to strings (no reverse mapping).
const enums are inlined at compile time (no runtime object).
For many cases, a union of string literal types (e.g., "Programmer" | "HR") is a lighter, zero-runtime alternative.
Examples:

// Numeric enum
enum Status {
    New,        // 0
    InProgress, // 1
    Done        // 2
}

// String enum
enum Position {
    Programmer = 'Programmer',
    HR = 'HR',
    Sales = 'Sales'
}

// const enum (inlined)
const enum Level {
    Low,
    High
}

// union alternative (no runtime)
type PositionUnion = 'Programmer' | 'HR' | 'Sales'