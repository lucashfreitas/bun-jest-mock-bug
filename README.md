# bun-jest-mock-bug

Bun `mock` function doesn't work when mocking a node-modules library used in another file.

# How to reproduce

The tests are almost identical, they simply mock an `aws-sdk` library which is used by `module.ts`. Bun only works when
sqs is being used directly on the test files.

If we are importing a module which is using the mocked module `bun` mock doesn't work.
