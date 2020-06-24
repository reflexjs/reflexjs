describe("page", () => {
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
  it("should render nested pages", () => {
    cy.visit("/nested")
    cy.contains("This is a nested page.")
  })
})
