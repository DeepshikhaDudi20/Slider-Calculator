// <reference types="cypress" />

const clientURL = "http://localhost:3000";

describe("The Quote Preview Form", () => {
  beforeEach(() => {
    cy.visit(clientURL);
  });

  it("displays the quote form preview", () => {
    cy.get('[data-testid="quote-form-preview"]').should("be.visible");
  });

  it(`should display valid initial slider view default values on page load`, () => {
    cy.get('[data-testid="loan-amount"]').should("have.text", "£1000");
    cy.get("#loan-amount-slider").should("have.attr", "value", 1000);
    cy.get('[data-testid="loan-term"]').should("have.text", "1 Year");
    cy.get("#loan-term-slider").should("have.attr", "value", 12);
    cy.get('[data-testid="interest-rate"]').should("have.text", "5%");
    cy.get('[data-testid="repayment-amount"]').should("have.text", "£86");
  });

  it(`should display get your quote button`, () => {
    cy.get('[data-testid="quote-btn"]').should("have.length", 1);
  });

  it("has a toggle icon that switches between input and slider", () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount-input"]').should("be.visible");
    cy.get('[data-testid="loan-term-select"]').should("be.visible");
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount"]').should("be.visible");
    cy.get('[data-testid="loan-term"]').should("be.visible");
  });

  it(`should display editable fields on toggle-icon click`, () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-term-select"]').select(4);
    cy.get('[data-testid="loan-amount-input"]')
      .should("have.attr", "value", 1000)
      .and("have.attr", "type", "number");
  });

  it(`should display valid interest rate based on amount entered`, () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount-input"]').clear().type(12000);
    cy.get("select").select(4);
    cy.get('[data-testid="interest-rate"]').should("have.text", "15%");
  });

  it(`should display max amount value in case amount entered is above max value`, () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount-input"]').clear().type(22000);
    cy.get('[data-testid="quote-form-preview"]').click();
    cy.get('[data-testid="loan-amount-input"]').should(
      "have.attr",
      "value",
      20000
    );
  });

  it(`should display min amount value in case amount entered is below min value`, () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount-input"]').clear().type(500);
    cy.get('[data-testid="quote-form-preview"]').click();
    cy.get('[data-testid="loan-amount-input"]').should(
      "have.attr",
      "value",
      1000
    );
  });

  it(`should display valid monthly repayment based on amount and term selected `, () => {
    cy.get('[data-testid="toggle-icon"]').click();
    cy.get('[data-testid="loan-amount-input"]').clear().type(10000);
    cy.get('[data-testid="loan-term-select"]').select(4);
    cy.get('[data-testid="interest-rate"]').should("have.text", "10%");
    cy.get('[data-testid="repayment-amount"]').should("have.text", "£322");
  });
});
