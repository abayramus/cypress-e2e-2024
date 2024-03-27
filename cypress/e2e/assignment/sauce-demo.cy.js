import SauceHomePage from "../../support/pages/SauceHomePage";
const { faker } = require("@faker-js/faker");
describe("E2E test", () => {
  let loginData;
  before(() => {
    cy.fixture("saucelab-data").then((data) => {
      loginData = data;
    });
  });


  it("product checkout test", () => {
    const sauceHomePage = new SauceHomePage();

    cy.visit(loginData.url, { timeout: 90000, retryOnNetworkFailure: true });

    sauceHomePage.setUsername(loginData.standartUser);
    sauceHomePage.setPassword(loginData.password);
    sauceHomePage.clickOnLoginButton();
    sauceHomePage.addFirstItem();
    sauceHomePage.clickShoppingCart();
    sauceHomePage.clickCheckout();
    sauceHomePage.enterFirstName(faker.person.firstName());

    sauceHomePage.enterLastName(faker.person.lastName());

    sauceHomePage.enterZip(faker.number.int({ min: 10000, max: 99999 }));

    sauceHomePage.clickContinue();
    sauceHomePage.clickFinish();
    sauceHomePage.verifyOrder();
  });
});
