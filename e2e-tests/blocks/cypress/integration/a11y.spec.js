describe("blocks", () => {
  it("Has no detectable accessibility violations on load", () => {
    cy.fixture("categories").then((categories) => {
      categories.forEach((category) => {
        cy.visit(`/${category}`).get("main").injectAxe()
        cy.checkA11y()
      })
    })
  })
})
