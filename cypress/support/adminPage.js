class AdminPage {
  visitUserManagement() {
    cy.visit("/web/index.php/admin/viewSystemUsers");
  }

  // Username
  typeUsername(username) {
    cy.contains("label", "Username")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(username);
  }

  verifyUsernameFieldValue(username) {
    cy.contains("label", "Username")
      .parents(".oxd-input-group")
      .find("input")
      .should("have.value", username);
  }

  // User Role
  selectUserRole(role) {
    cy.contains("label", "User Role")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .click();

    cy.contains(".oxd-select-option", role).click();
  }

  // Status
  selectStatus(status) {
    cy.contains("label", "Status")
      .parents(".oxd-input-group")
      .find(".oxd-select-text")
      .click();

    cy.contains(".oxd-select-option", status).click();
  }

  // Buttons
  clickSearchBtn() {
    cy.contains("button", "Search").click();
  }

  clickResetBtn() {
    cy.contains("button", "Reset").click();
  }

  // Results
  resultRows() {
    return cy.get(".oxd-table-card");
  }

  verifyResultExists() {
    this.resultRows().should("have.length.greaterThan", 0);
  }

  verifyNoRecordsFound() {
    cy.contains("No Records Found").should("be.visible");
  }

  // Username Column
  getUsernameColumnValues() {
    return cy.get(
      ".oxd-table-body .oxd-table-row .oxd-table-cell:nth-child(2)",
    );
  }

  // Sorting
  clickUsernameSortDropdown() {
    cy.contains(".oxd-table-header-cell", "Username").click();
  }

  clickSortAscending() {
    cy.contains("li", "Ascending").click({ force: true });
  }

  clickSortDescending() {
    cy.contains("li", "Descending").click({ force: true });
  }
}

export default new AdminPage();
