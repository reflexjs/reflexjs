describe("block", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders static blocks", () => {
    cy.get("[data-cy=static-block]")
      .should("have.css", "background-color", "rgb(255, 0, 0)")
      .find("> p")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .contains("This is a static block")
  })

  it("renders blocks with props", () => {
    cy.get("[data-cy=with-props-block]")
      .should("have.css", "background-color", "rgb(0, 128, 0)")
      .find("> h1")
      .contains("This is some text")
  })

  it("renders dynamic blocks", () => {
    cy.get("[data-cy=dynamic-block]").as("block")
    cy.get("@block").should("have.css", "color", "rgb(0, 128, 0)")
    cy.get("@block").find("> h2:first-child").contains("Heading One")
    cy.get("@block").find("> h2:last-child").contains("Heading Two")
  })

  it("renders nested blocks", () => {
    cy.get("[data-cy=nested-block]").contains("This is a nested block")
  })
})
