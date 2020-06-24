describe("code-block", () => {
  it("should turn markdown into prism code", () => {
    cy.visit("/")
    cy.get(".prism-code.language-js").contains('console.log("foo bar")')
  })
})
