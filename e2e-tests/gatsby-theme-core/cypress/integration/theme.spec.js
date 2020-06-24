describe("theme", () => {
  it("should allow theme.js shadowing", () => {
    cy.visit("/")
    cy.get("body").should("have.css", "background-color", "rgb(255, 153, 68)")
  })
})
