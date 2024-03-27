describe("User Creation Validation", () => {
  let loginData;
  let userData;
  before(() => {
    cy.fixture("creds").then((data) => {
      loginData = data;
    });
    // register datalari
    cy.fixture("register-data").then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    //her bir it blogundan once bir kez yapmak istediklerimiz yazilacak
  });

  it("create dean test", () => {
    // token olustur
    cy.generateToken(loginData[0].username, loginData[0].password).then(
      (token) => {
        // console.log(token);

        cy.request({
          method: "GET",
          url: loginData[0].getURL,
          headers: {
            Authorization: `${token}`,
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          console.log(response.body);

          expect(response.body[0]).to.have.property("username"); //ilk elementin username property sinin verification

          expect(response.body[response.body.length - 1]).to.have.property(
            "username"
          ); //en sonki elementin username property sinin verification

          // OLUSTURDUGUMUZ DEAN DATALARININ VERIFICATION I
          // expect(response.body[response.body.length-1].name).to.be.equal('uohn8')// en sonki ismin validation i
          // expect(response.body[response.body.length-1].name).to.be.equal(userData[0].deanName)// en sonki ismin validation i

          expect(
            response.body.some((user) => user.name === userData[0].deanName)
          ).to.be.true;
          expect(
            response.body.some((user) => user.username === userData[0].username)
          ).to.be.true;
          expect(response.body.some((user) => user.ssn === userData[0].ssn)).to
            .be.true;

          // KISACA SU SEKILDE YAZILABILIR

          expect(
            response.body.some(
              (user) =>
                user.username === userData[0].username &&
                user.name === userData[0].deanName &&
                user.surname === userData[0].deanSurname &&
                user.birthPlace === userData[0].city &&
                user.ssn === userData[0].ssn &&
                user.phoneNumber === userData[0].phone
            )
          ).to.be.true;
        });
      }
    );
  });
});
