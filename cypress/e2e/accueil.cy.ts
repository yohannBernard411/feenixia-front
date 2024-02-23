
describe('Test de la page d\'accueil', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('verification du titre', () => {
    cy.get("h1").contains("FEENIXIA-VOYANCE-ENERGIE")
  });

  it('cliquer sur le lien (accueil)', () => {
    cy.get(".menu-link").eq(0).click()
    cy.url().should('include', '/welcome')
  })

  it('cliquer sur le lien (qui suis je?)', () => {
    cy.get(".menu-link").eq(1).click()
    cy.url().should('include', '/who')
  })

  it('cliquer sur le lien (prestations)', () => {
    cy.get(".menu-link").eq(2).click()
    cy.url().should('include', '/cares')
  })

  it('cliquer sur le lien (temoignages)', () => {
    cy.get(".menu-link").eq(3).click()
    cy.url().should('include', '/opinions')
  })

  it('cliquer sur le lien (contact)', () => {
    cy.get(".menu-link").eq(4).click()
    cy.url().should('include', '/contact')
  })

});