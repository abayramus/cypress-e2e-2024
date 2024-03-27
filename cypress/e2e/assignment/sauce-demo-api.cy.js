const { faker } = require("@faker-js/faker");

describe('User Tests', () => {
    let tokenData;
    let userId;
    let initialUserData;

    before(() => {
        cy.fixture("token").then(data => {
            tokenData = data;
        });
    });

    it('User Creation Test', () => {
        cy.fixture("user-data").then(userData => {
            initialUserData = userData;
            const body = {
                "name": userData.name,
                "gender": userData.gender,
                "email": faker.internet.email(),
                "status": userData.status
            };

            cy.request({
                method: "POST",
                url: "https://gorest.co.in/public/v1/users",
                headers: {
                    Authorization: tokenData.token,
                    "Content-Type": "application/json",
                },
                body: body,
            }).then(response => {
                expect(response.status).to.eq(201);
                expect(response.body.data).to.have.property('id');
                userId = response.body.data.id;
            });
        });
    });

    it('User Update Test', () => {
        const updatedName = faker.person.firstName();
        const updatedGender = "female";
        const updatedEmail = faker.internet.email();
        const updatedStatus = "inactive";

        const body = {
            "name": updatedName,
            "gender": updatedGender,
            "email": updatedEmail,
            "status": updatedStatus
        };

        cy.request({
            method: "PUT",
            url: `https://gorest.co.in/public/v1/users/${userId}`,
            headers: {
                Authorization: tokenData.token,
                "Content-Type": "application/json",
            },
            body: body,
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.eq(updatedName);
            expect(response.body.data.gender).to.eq(updatedGender);
            expect(response.body.data.email).to.eq(updatedEmail);
            expect(response.body.data.status).to.eq(updatedStatus);
        });
    });
});
