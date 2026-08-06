# Week 1: JavaScript Fundamentals

## Goal

Build confidence with values, variables, functions, conditionals, loops, and basic debugging while creating a small command-line investment calculator.

## Learning outcomes

By the end of the week, you should be able to:

- Declare and update variables with `const` and `let`.
- Work with strings, numbers, booleans, `null`, and `undefined`.
- Write functions that accept arguments and return values.
- Use `if` statements and loops to make decisions and repeat work.
- Read error messages and use `console.log` to inspect values.

## Study plan

| Day | Topic | Practice |
| --- | --- | --- |
| 1 | Values, variables, and types | Run the variables-and-types lesson |
| 2 | Operators and template strings | Explore the investment calculator inputs |
| 3 | Functions and return values | Review `calculateFutureValue` |
| 4 | Conditionals | Review the investment-risk message |
| 5 | Loops | Print yearly investment snapshots |
| 6 | Review and refactor | Improve names and remove duplication |
| 7 | Ship | Add a scenario and commit it |

## Folder structure

```text
week-01-fundamentals/
├── lessons/
│   └── 01-variables-and-types/    # First standalone lesson
└── projects/
    ├── investment-calculator/     # Week 1 command-line project
    ├── crypto-calculator/         # Small functions practice project
    └── token-converter/           # Token-to-USD conversion practice
```

## Run the investment calculator

```bash
cd projects/investment-calculator
node index.js
```

Run the first lesson with `node lessons/01-variables-and-types/index.js`, try the crypto functions example with `node projects/crypto-calculator/index.js`, or run the token converter with `node projects/token-converter/index.js`.

## Tasks

1. Read and run `lessons/01-variables-and-types`.
2. Review the helper functions in `projects/investment-calculator`.
3. Change the sample investor and verify the printed output changes.
4. Add one new scenario of your own in `projects/investment-calculator/index.js`.
5. Commit your finished work with a meaningful message.

## Stretch challenge

Update the calculator so that it adds a monthly contribution every month and compounds using a monthly interest rate. Explain, in a comment, how this differs from the starting yearly model.
