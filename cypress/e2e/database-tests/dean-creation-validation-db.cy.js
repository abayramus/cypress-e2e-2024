describe("User Validation DB", () => {
  let userData;
  before(() => {
    // register datalari
    cy.fixture("register-data").then((data) => {
      userData = data;
    });
  });

  it("dean validation db test", () => {
    cy.task("connectDB", "select * from dean").then((data) => {
      console.log(data);

   
      expect(
        data.rows.some(
          (user) =>
            user.username === userData[0].username &&
            user.name === userData[0].deanName &&
            user.surname === userData[0].deanSurname &&
            user.birth_place === userData[0].city &&
            user.phone_number === userData[0].phone
        )
      ).to.be.true;

    });
  });
});