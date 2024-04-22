# bun-jest-mock-bug

Bun `mock` function doesn't work when mocking a node-modules library used in another file.

# The issue

Bun `mock` does not work when the module mocked is being refenced/used in another file.

The tests are almost identical, they simply mock the `@aws-sdk/client-sqs` module. We have three examples provided
both in `jest` and in `bun`.

The main difference is that `bun` behaves different to `jest` when we use `@aws-sdk/client-sqs` inside `module.ts`.

# How to reproduce.

1. run `pnpm install` to install the packages
2. install bun (i've tested on bun `1.14`)
3. run `pnpm jest:test`, all tests passes.
4. run `pnpm bun:test`, one test case fail.
