import { CaresComponent } from './cares.component';

describe('CaresComponent', () => {

  beforeEach(() => {
    cy.mount(CaresComponent);
  })

  it('création du composant', () => {
    cy.mount(CaresComponent);
  });

  it('cares subtitle', () => {
    cy.get('.subtitle').should('have.text', 'Préstations')
  });

  it('cares cards = 4', () => {
    cy.get('.all-cards div').children().should('have.length', 4)
  });

});