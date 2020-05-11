describe('<Contribution/>', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should have correct href to visit', () => {
    const anchors = [
      {
        selector: '[data-testid=issues]', url: 'https://github.com/jobtriage/jobtriage/issues',
      },
      {
        selector: '[data-testid=pulls]', url: 'https://github.com/jobtriage/jobtriage/pulls',
      },
    ];

    cy.wrap(anchors)
      .each((a) => {
        cy.get(a.selector)
          .should('to.have.attr', 'href', a.url);
      });
  });
});
