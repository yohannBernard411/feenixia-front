import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  it('should mount', () => {
    cy.mount(HeaderComponent)
  })

  it('cliquer sur le lien (accueil)', () => {
    cy.mount(HeaderComponent)
    cy.get(".menu-link").eq(0).should('include', 'Accueil')
  })

});

