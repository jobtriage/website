describe('<Intro />', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should able to open a app window on click', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.get('[data-testid=app-button]')
      .click();
    cy.get('@windowOpen').should('be.calledWith', 'https://app.jobtriage.org/', '_blank');
  });
});
