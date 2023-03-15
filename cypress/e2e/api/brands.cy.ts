describe('brands api tests', () => {
    it('retreive brands', () => {
        cy
            .request('GET', 'https://api.practicesoftwaretesting.com/brands/1')
            .then((response) => {
                expect(response.body.name).to.eq('Brand name 1');
            }
        );
    });

    it('add brands', () => {
        cy
            .request('POST', 'https://api.practicesoftwaretesting.com/brands', { name: 'Andúril, the flame of the west', slug: 'Andúril, the flame of the west' })
            .then((response) => {
                expect(response.body).to.have.property('name', 'Andúril, the flame of the west');
            }
        );
    });

    it('login and retreive invoices', () => {
        const credentialsPayload = {
            email: "customer@practicesoftwaretesting.com",
            password: "welcome01"
        };

        cy
            .request('POST', 'https://api.practicesoftwaretesting.com/users/login', credentialsPayload)
            .then((postResponse) => {
                const token = postResponse.body.access_token;
                cy
                    .request({
                        method: 'GET',
                        url: 'https://api.practicesoftwaretesting.com/invoices',
                        headers: { 
                            'Authorization': `Bearer ${token}` 
                        }})
                    .then((getResponse) => {
                        expect(getResponse.body.total).to.be.eq(7);
                    }
                );
            }
        );
    });
});