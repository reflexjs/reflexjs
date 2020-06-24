describe("core", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should render the home page", () => {
    cy.get("h1").contains("This is the home page")
  })
  it("should render custom MDX components", () => {
    cy.get("a").contains("Go to about")
  })
  it("should render pages with custom slug", () => {
    cy.get("a").click()
    cy.contains("This is the about page")
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
})
