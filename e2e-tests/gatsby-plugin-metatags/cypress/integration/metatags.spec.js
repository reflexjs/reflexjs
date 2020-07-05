describe("metatags", () => {
  it("should set default metatags", () => {
    cy.visit("/no-excerpt-image")

    cy.get("head title").should(
      "contain",
      "Page with no excerpt and no image | Reflex"
    )
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "http://localhost:8000/no-excerpt-image"
    )
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "Page description"
    )

    // OG.
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Page with no excerpt and no image"
    )
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "Page description"
    )
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/no-excerpt-image"
    )
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "article"
    )
    cy.get('head meta[property="og:image"]')
      .should("have.attr", "content")
      .and("match", /placeholder.jpg$/)

    // Twitter.
    cy.get('head meta[property="twitter:title"]').should(
      "have.attr",
      "content",
      "Page with no excerpt and no image"
    )
    cy.get('head meta[property="twitter:description"]').should(
      "have.attr",
      "content",
      "Page description"
    )
    cy.get('head meta[property="twitter:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/no-excerpt-image"
    )
    cy.get('head meta[property="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    )
    cy.get('head meta[property="twitter:image"]')
      .should("have.attr", "content")
      .and("match", /placeholder.jpg$/)
  })

  it("should use set values", () => {
    cy.visit("/with-excerpt-image")

    cy.get("head title").should(
      "contain",
      "Page with excerpt and image | Reflex"
    )
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "http://localhost:8000/with-excerpt-image"
    )
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )

    // OG.
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Page with excerpt and image"
    )
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/with-excerpt-image"
    )
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "article"
    )
    cy.get('head meta[property="og:image"]')
      .should("have.attr", "content")
      .and("match", /image.jpg$/)

    // Twitter.
    cy.get('head meta[property="twitter:title"]').should(
      "have.attr",
      "content",
      "Page with excerpt and image"
    )
    cy.get('head meta[property="twitter:description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )
    cy.get('head meta[property="twitter:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/with-excerpt-image"
    )
    cy.get('head meta[property="twitter:card"]').should(
      "have.attr",
      "content",
      "summary_large_image"
    )
    cy.get('head meta[property="twitter:image"]')
      .should("have.attr", "content")
      .and("match", /image.jpg$/)
  })

  it("should use metatags values", () => {
    cy.visit("/with-metatags")

    cy.get("head title").should("contain", "Metatags title | Reflex")
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "http://localhost:8000/with-metatags"
    )
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )

    // OG.
    cy.get('head meta[property="og:title"]').should(
      "have.attr",
      "content",
      "Metatags title"
    )
    cy.get('head meta[property="og:description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )
    cy.get('head meta[property="og:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/with-metatags"
    )
    cy.get('head meta[property="og:type"]').should(
      "have.attr",
      "content",
      "article"
    )
    cy.get('head meta[property="og:image"]')
      .should("have.attr", "content")
      .and("match", /placeholder.jpg$/)

    // Twitter.
    cy.get('head meta[property="twitter:title"]').should(
      "have.attr",
      "content",
      "Metatags title"
    )
    cy.get('head meta[property="twitter:description"]').should(
      "have.attr",
      "content",
      "This is the page description"
    )
    cy.get('head meta[property="twitter:url"]').should(
      "have.attr",
      "content",
      "http://localhost:8000/with-metatags"
    )
    cy.get('head meta[property="twitter:card"]').should(
      "have.attr",
      "content",
      "summary"
    )
    cy.get('head meta[property="twitter:image"]')
      .should("have.attr", "content")
      .and("match", /placeholder.jpg$/)
  })

  it("should set metatags per paths", () => {
    cy.visit("/examples")

    cy.get("head title").should("contain", "Global title | Reflex")
    cy.get('head link[rel="canonical"]').should(
      "have.attr",
      "href",
      "http://localhost:8000/examples"
    )
    cy.get('head meta[name="description"]').should(
      "have.attr",
      "content",
      "Example page description"
    )
  })
})
