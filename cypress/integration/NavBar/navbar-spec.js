describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('Should redirect correctly from nav bar', () => {
    const baseUrl = Cypress.config('baseUrl');
    const navs = [
      { selector: '.css-wvs09x-Root > img', url: `${baseUrl}/` },
      { selector: '[data-testid=home]', url: `${baseUrl}/` },
      { selector: '[data-testid=blogs]', url: `${baseUrl}/blogs` },
    ];

    cy.wrap(navs)
      .each((nav) => {
        cy.get(nav.selector)
          .click();
        cy.url().should('to.equal', nav.url);
      });
  });

  it('Should have correct url for github navigation', () => {
    cy.get('[data-testid=github]')
      .should('to.have.attr', 'href', 'https://github.com/jobtriage/jobtriage');
  });
});
