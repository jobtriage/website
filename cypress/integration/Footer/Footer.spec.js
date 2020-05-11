describe('<Footer/>', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should have a correct url for socail media', () => {
    const anchors = [
      { selector: '[data-testid=twitter]', url: 'https://twitter.com/KoushikKM96' },
      { selector: '[data-testid=gmail]', url: 'mailto:jobtriage@gmail.com' },
    ];

    cy.wrap(anchors)
      .each((a) => {
        cy.get(a.selector)
          .should('to.have.attr', 'href', a.url);
      });
  });
});
