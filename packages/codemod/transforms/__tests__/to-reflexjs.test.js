/* global jest */
jest.autoMockOff()
const defineTest = require("jscodeshift/dist/testUtils").defineTest

const fixtures = ["button-variant", "heading-variant", "rename-props", "pseudo-props", "input-variant", "component"]

for (const fixture of fixtures) {
  defineTest(__dirname, "to-reflexjs", null, `to-reflexjs/${fixture}`)
}
