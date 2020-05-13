describe('<BlogItem/>', () => {
    it('Should able to visit to correct blog page', () => {
        cy.visit('/blogs', {timeout: 120000});
        
        const baseUrl = Cypress.config('baseUrl');

        cy.get('[data-testid=blog-preview]')
            .as('list-item')
            .invoke('attr', 'test-data')
            .then((slug) => {

                cy.get('@list-item').click()
                cy.url().should('to.equal', `${baseUrl}/blogs/${slug}`);
                
                const url = [
                    {selector: '[href="https://github.com/koushikmohan1996"]', url:"https://github.com/koushikmohan1996"},
                    {selector: '[href="https://twitter.com/KoushikKM96"]', url:"https://twitter.com/KoushikKM96"}
                ];
        
                cy.wrap(url)
                    .each((a) => {
                        cy.get(a.selector).should('to.have.attr', 'href', a.url)
                    })
            })
    })
})