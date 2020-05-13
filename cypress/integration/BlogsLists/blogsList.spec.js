describe('<BlogContainer />', () => {
  beforeEach(() => {
    cy.visit('/blogs');
  });

  it('Should render correct numbers of blog-item', () => {
    cy.get('[data-testid=preview-list]')
      .as('list')
      .invoke('attr', 'data')
      .then((data) => {
        cy.get('@list')
          .should('have.length', data);
      });
  });
});
