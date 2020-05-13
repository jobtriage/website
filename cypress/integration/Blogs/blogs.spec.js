describe('Blogs Page', () => {
  beforeEach(() => {
    cy.visit('/blogs');
  });

  it('Should able to visit correct page', () => {
    cy.get('[data-testid=preview-list]')
      .as('list')
      .invoke('attr', 'data')
      .then((data) => {
        cy.get('@list')
          .should('have.length', data);
      });
  });
});
