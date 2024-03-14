import AddDeanPage from "../../support/pages/AddDeanPage";

describe("User Creation", () => {
  let loginData;
  let registrationData;
  before(() => {
    //tum classdan once tek seferlik yapmak istediklerimiz yazilacak
    cy.fixture("creds").then((data) => {
      loginData = data;
    });

    cy.fixture("register-data").then((data) => {
      registrationData = data;
    });
  });

  beforeEach(() => {
    //her bir it blogundan once bir kez yapmak istediklerimiz yazilacak
  });

  it("create dean test", () => {
    // test case ler yazilacak

    const deanPage = new AddDeanPage();

    // cy.visit("https://managementonschools.com/");//hard coded. not recommended
    cy.visit(loginData[0].url);

    //login icin  reusable method olusturalim
    // cy.login('AdminAhmet','AhmetBayram1+');//hard coded-not recommended
    cy.login(loginData[0].username, loginData[0].password);

    deanPage.clickOnMenu();
    deanPage.clickOnDeanManagement();
    // deanPage.enterDeanName('john10');//hard coded not recommended
    deanPage.enterDeanName(registrationData[0].deanName);
    deanPage.enterDeanSurName(registrationData[0].deanSurname);
    deanPage.enterBirthPlace(registrationData[0].city);
    deanPage.enterDeanGender(registrationData[0].genderMale);
    deanPage.enterBirthDay(registrationData[0].dateOfBirth);
    deanPage.enterPhone(registrationData[0].phone);
    deanPage.enterSSN(registrationData[0].ssn);
    deanPage.enterUsername(registrationData[0].username);
    deanPage.enterDeanPassword(registrationData[0].password);
    deanPage.clickOnDeanSubmit();
    deanPage.verifyDeanRegistration();
  });
});
