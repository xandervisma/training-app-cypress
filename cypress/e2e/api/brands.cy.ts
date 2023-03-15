describe('brands api tests', () => {
    it('retreive brands', () => {
        cy.request('GET', 'https://api.practicesoftwaretesting.com/brands/1').then((response) => {
            expect(response.body.name).to.eq('Brand name 1');
        });
    });

    it('post brands', () => {
        cy.request('POST', 'https://api.practicesoftwaretesting.com/brands', { name: 'new-brand' }).then(
            (response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property('name', 'new-brand') // true
            }
        );
    });
});