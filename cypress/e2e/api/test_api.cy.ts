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
                const accessToken = postResponse.body.access_token;
                cy
                    .request({
                        method: 'GET',
                        url: 'https://api.practicesoftwaretesting.com/invoices',
                        headers: { 
                            'Authorization': `Bearer ${accessToken}` 
                        }})
                    .then((getResponse) => {
                        expect(getResponse.body.total).to.be.eq(7);
                    }
                );
            }
        );
    });

    it('GET image', () => {
        const imageDetail = { 
            "id": "0",
        };

        cy.request('GET', 'https://api.practicesoftwaretesting.com/images', imageDetail);
    });

    it('add products', () => {
        const productDetail = { 
            "name": "Andúril",
            "description": "The flame of the west",
            "price": 9000.00,
            "category_id": 1,
            "brand_id": 1,
            "product_image_id": 1,
            "is_location_offer": 1,
            "is_rental": 0
        };

        cy.request('POST', 'https://api.practicesoftwaretesting.com/products', productDetail);
    });
});