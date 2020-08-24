describe("image", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should display local images", () => {
    cy.get("[data-cy=local-image]").find("img").should("be.visible")
    cy.get("[data-cy=local-image]")
      .find("picture > img")
      .invoke("attr", "alt")
      .should("contain", "This is a local image")
  })
  it("should display external images", () => {
    cy.get("[data-cy=external-image]")
      .find("img")
      .invoke("attr", "alt")
      .should("contain", "This is an external image")
  })
  it("should not display non existing images", () => {
    cy.get("[data-cy=no-image]").find("img").should("not.exist")
  })
  it("should display svg images", () => {
    cy.get("[data-cy=svg-image]")
      .find("figure > img")
      .invoke("attr", "alt")
      .should("contain", "This is a SVG image")
  })
})
