class ClaimPage {
  openClaimMenu() {
    cy.contains("span", "Claim").should("be.visible").click();
    cy.contains("a", "Submit Claim").click();
  }

  openMyClaimsMenu() {
    cy.contains("span", "Claim").should("be.visible").click();
    cy.contains("a", "My Claims").click();
  }

  submitClaimUrlValidation() {
    cy.url().should("include", "/submitClaim");
  }

  myClaimsUrlValidation() {
    cy.url().should("include", "/claim/viewClaim");
  }

  selectEvent(event) {
    cy.contains("label", "Event")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .click();
    cy.contains(".oxd-select-option", event).click();
  }

  selectCurrency(currency) {
    cy.contains("label", "Currency")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .click();
    cy.contains(".oxd-select-option", currency).click();
  }

  typeRemarks(text) {
    cy.get("textarea").clear().type(text);
  }

  clickCreateBtn() {
    cy.contains("button", "Create").click();
  }

  clickCancelBtn() {
    cy.contains("button", "Cancel").click();
  }

  cancelUrlValidation() {
    cy.url().should("include", "/claim/viewClaim");
  }

  viewClaimUrlValidation() {
    cy.url().should("include", "/claim/submitClaim/id/");
  }

  requiredFieldValidation(message) {
    cy.get(".oxd-input-field-error-message").should("contain", message);
  }

  requiredFieldCountValidation(count) {
    cy.get(".oxd-input-field-error-message")
      .should("have.length", count)
      .each(($el) => {
        cy.wrap($el).should("contain", "Required");
      });
  }

  typeReferenceId(refId) {
    cy.contains("label", "Reference Id")
      .parents(".oxd-input-group")
      .find("input")
      .type(refId);
  }

  clickSearchBtn() {
    cy.contains("button", "Search").click();
  }

  searchResultValidation(refId) {
    cy.get(".oxd-table-card").should("be.visible");
    cy.contains(".oxd-table-cell", refId).should("be.visible");
  }

  noRecordsFoundValidation() {
    cy.contains(".oxd-text--span", "No Records Found").should("be.visible");
  }

  selectEventNameFilter(event) {
    cy.contains("label", "Event Name")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .click();
    cy.contains(".oxd-select-option", event).click();
  }

  clickResetBtn() {
    cy.contains("button", "Reset").click();
  }

  filterResetValidation() {
    cy.contains("label", "Event Name")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .should("contain", "-- Select --");
  }
}

export default new ClaimPage();
