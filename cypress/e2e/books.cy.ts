describe('Initial page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.mat-mdc-card').as('books');
  });

  it('Visits the initial project page', () => {
    cy.get('.mat-toolbar > span').contains(/BOOK MONKEY/i);
  });

  it('should increase the number of books by 1', () => {
    let countBefore = 0;
    cy.get('@books')
      .then(books => (countBefore = books.length))
      .then(() => {
        cy.get('[routerlink="books/new"]')
          .contains(/NEW BOOK/i)
          .click();

        const randomISBN = Math.floor(1000000000000 + Math.random() * 900000);
        cy.get('[placeholder="ISBN"]').type('' + randomISBN);
        cy.get('[placeholder="Title"]').type('Test Book');
        cy.get('[placeholder="Author"]').type('Max Mustermann');

        cy.contains(/SAVE/i).click();

        cy.get('@books').should('have.length', countBefore + 1);
      });
  });
});
