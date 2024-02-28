describe('Initial page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('.mat-toolbar > span').contains(/BOOK MONKEY/i);
  });
});
