describe("MAXOLE", () => {
  beforeEach(() => cy.visit("/"));
  it("works", () => {
    cy.get("a")
      .last()
      .click();
  });
});
