describe("User Creation", () => {
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
    //her bir it blogundan once bir kez yapmak istediklerimiz yazilacakg
    console.log('TEST---')
    console.log(cy.generateUsers(1))
  });

  it("create dean", () => {
    cy.generateToken(loginData[0].username, loginData[0].password).as(
      "authToken"
    );

    cy.get("@authToken").then((authToken) => {
      // Prepare Dean data
      const deanData = {
        birthDay: userData[0].dateOfBirth,
        birthPlace: userData[0].city,
        gender: userData[0].genderMale,
        name: userData[0].deanName,
        password: userData[0].password,
        phoneNumber: userData[0].phone,
        ssn: userData[0].ssn,
        surname: userData[0].deanSurname,
        username: userData[0].username,
      };

      cy.addDean(authToken, deanData);
    });
  });
});
