class SauceHomePage {
  // css locators
  usernameBox = "#user-name";
  passwordBox = "#password";
  loginButton = "#login-button";
  firstItem = "#add-to-cart-sauce-labs-backpack";
  shoppingCart = ".shopping_cart_link";
  checkout = "#checkout";
  firstName = "#first-name";
  lastName = "#last-name";
  zipCode = "#postal-code";
  continueButton = "#continue";
  finishButton = "#finish";
  thankyouMessage = ".complete-header";
  setUsername(username) {
    cy.get(this.usernameBox).type(username);
  }
  setPassword(password) {
    cy.get(this.passwordBox).type(password);
  }
  clickOnLoginButton() {
    cy.get(this.loginButton).click();
  }

  addFirstItem() {
    cy.get(this.firstItem).click();
  }
  clickShoppingCart() {
    cy.get(this.shoppingCart).click();
  }
  clickCheckout() {
    cy.get(this.checkout).click();
  }
  enterFirstName(name) {
    cy.get(this.firstName).type(name, { force: true });
  }
  enterLastName(lastName) {
    cy.get(this.lastName).type(lastName, { force: true });
  }

  enterZip(zip) {
    cy.get(this.zipCode).type(zip, { force: true });
  }
  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  verifyOrder() {
    cy.get(this.thankyouMessage).should("be.visible");
  }
}

export default SauceHomePage;
