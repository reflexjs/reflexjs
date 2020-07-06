describe("a11y", () => {
  it(`has no detectable accessibility violations`, () => {
    cy.fixture("a11y-pages").then((pages) => {
      pages.forEach((page) => {
        cy.visit(page).get("main").injectAxe()
        cy.checkA11y()
      })
    })
  })
})
