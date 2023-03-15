describe('brands api tests', () => {
    it('retreive brands', () => {
        cy.request('GET', 'https://api.practicesoftwaretesting.com/brands/1').then((response) => {
            
        });
    })
});