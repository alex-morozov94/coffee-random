/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.(ts|js)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'svelte'],
};