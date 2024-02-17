describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("/welcome")
    cy.get("h1").contains("FEENIXIA-VOYANCE-ENERGIE")
  })
})

