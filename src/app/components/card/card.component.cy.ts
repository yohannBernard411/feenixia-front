import { CardComponent } from './card.component';

describe('CardComponent', () => {

  beforeEach(() => {
    cy.mount(CardComponent, {
      componentProperties: {
        title: "Le titre",
        content: "Le texte",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo8ifEhDcDKcVlik5qMdjCW--WApqNbneiesoi-ewMQ&s",
        cta: "/connexion"
      }});
  })

  it('création du composant', () => {
    cy.mount(CardComponent);
  });

  it('card title', () => {
    cy.get('.card-title').should('have.text', 'Le titre')
  });

  it('card content', () => {
    cy.get('.content-card').should('have.text', 'Le texte')
  });

  it('card img', () => {
    cy.get('.card-img').should('be.visible')
  });

  it('card cta', () => {
    cy.get('.cta-card').should('have.text', 'En savoir plus...')
  });

  it('card cta link', () => {
    cy.get('.cta-card').should('have.attr', 'href').and('include', 'connexion')
  });

});
