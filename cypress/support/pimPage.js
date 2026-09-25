class PimPage {
  openPimMenu() {
    cy.contains("span", "PIM").should("be.visible").click();
  }

  employeeListUrlValidation() {
    cy.url().should("include", "/viewEmployeeList");
  }

  verifyEmployeeListElements() {
    cy.contains("label", "Employee Name").should("be.visible");
    cy.contains("label", "Employee Id").should("be.visible");
    cy.contains("label", "Employment Status").should("be.visible");
    cy.contains("label", "Include").should("be.visible");
    cy.contains("label", "Supervisor Name").should("be.visible");
    cy.contains("label", "Job Title").should("be.visible");
    cy.contains("label", "Sub Unit").should("be.visible");
    cy.contains("button", "Search").should("be.visible");
    cy.contains("button", "Reset").should("be.visible");
    cy.contains("Records Found").should("be.visible");
  }

  typeEmployeeName(name) {
    cy.contains("label", "Employee Name")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(name);
  }

  clickSearchBtn() {
    cy.contains("button", "Search").click();
  }

  verifyResultExists() {
    cy.get(".oxd-table-card").its("length").should("be.gt", 0);
  }

  verifyNoRecordsFound() {
    cy.contains("No Records Found").should("be.visible");
  }

  clickResetBtn() {
    cy.contains("button", "Reset").click();
  }

  verifyEmployeeNameFieldEmpty() {
    cy.contains("label", "Employee Name")
      .parents(".oxd-input-group")
      .find("input")
      .should("have.value", "");
  }

  clickAddBtn() {
    cy.contains("button", "Add").click();
  }

  addEmployeeUrlValidation() {
    cy.url().should("include", "/addEmployee");
  }

  verifyAddEmployeeElements() {
    cy.get('input[placeholder="First Name"]').should("be.visible");
    cy.get('input[placeholder="Middle Name"]').should("be.visible");
    cy.get('input[placeholder="Last Name"]').should("be.visible");
    cy.contains("label", "Employee Id").should("be.visible");
    cy.contains("button", "Save").should("be.visible");
  }

  typeFirstName(name) {
    cy.get('input[placeholder="First Name"]').clear().type(name);
  }

  typeLastName(name) {
    cy.get('input[placeholder="Last Name"]').clear().type(name);
  }

  clickSaveBtn() {
    cy.contains("button", "Save").click();
  }

  personalDetailsUrlValidation() {
    cy.url().should("include", "viewPersonalDetails");
  }

  requiredFieldValidation(message) {
    cy.get(".oxd-input-field-error-message").should("contain", message);
  }

  typeEmployeeIdOnAddForm(id) {
    cy.contains("label", "Employee Id")
      .parents(".oxd-input-group")
      .find("input")
      .clear()
      .type(id);
  }

  employeeIdDuplicateValidation() {
    cy.get(".oxd-input-field-error-message").should("be.visible");
  }
}

export default new PimPage();
