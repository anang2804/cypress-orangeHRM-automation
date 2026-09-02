class directoryPage {
  // Navigasi
  clickDirectoryMenu() {
    cy.contains("Directory").click();
  }
  directoryUrlValidation() {
    cy.url().should("include", "/viewDirectory");
  }

  // Employee Name
  typeEmployeeName(employeeName) {
    cy.get("input[placeholder='Type for hints...']").type(employeeName);
  }
  selectEmployeeSuggestion(employeeName) {
    cy.get(".oxd-autocomplete-dropdown").contains(employeeName).click();
  }
  searchEmployeeByName(employeeName) {
    this.typeEmployeeName(employeeName);
    this.selectEmployeeSuggestion(employeeName);
  }
  verifyNoEmployeeSuggestion() {
    cy.get(".oxd-autocomplete-option").should("contain", "No Records Found");
  }

  // Job Title
  openJobTitleDropdown() {
    cy.get(".oxd-select-text").eq(0).click();
  }
  selectJobTitle(jobTitle) {
    this.openJobTitleDropdown();
    cy.contains(jobTitle).click();
  }
  verifyJobTitleOptionsExist() {
    cy.get(".oxd-select-dropdown .oxd-select-option").should(
      "have.length.greaterThan",
      0,
    );
  }

  // Location
  openLocationDropdown() {
    cy.get(".oxd-select-text").eq(1).click();
  }
  selectLocation(location) {
    this.openLocationDropdown();
    cy.contains(location).click();
  }
  verifyLocationOptionsExist() {
    cy.get(".oxd-select-dropdown .oxd-select-option").should(
      "have.length.greaterThan",
      0,
    );
  }

  // Buttons
  clickSearchBtn() {
    cy.get("button[type='submit']").click();
  }
  clickResetBtn() {
    cy.contains("button", "Reset").click();
  }

  // Search Result
  verifySearchResultContains(employeeName) {
    cy.get(".oxd-sheet").should("contain", employeeName);
    cy.get(".orangehrm-profile-picture-img").should("be.visible");
  }
  verifyNoRecordsFound() {
    cy.contains("No Records Found").should("be.visible");
  }

  // Intercept
  interceptDefaultEmployeeList() {
    cy.intercept("GET", "**/api/v2/directory/employees?limit=14&offset=0").as(
      "defaultEmployeeList",
    );
  }
  interceptEmployeeByLocation() {
    cy.intercept(
      "GET",
      "**/api/v2/directory/employees?limit=14&offset=0&locationId=*",
    ).as("employeeByLocation");
  }
  interceptEmployeeByJobTitle() {
    cy.intercept(
      "GET",
      "**/api/v2/directory/employees?limit=14&offset=0&jobTitleId=*",
    ).as("employeeByJobTitle");
  }
  interceptEmployeeByName() {
    cy.intercept(
      "GET",
      "**/api/v2/directory/employees?limit=14&offset=0&empNumber=*",
    ).as("employeeByName");
  }
  interceptEmployeeCombinedFilter() {
    cy.intercept("GET", "**/api/v2/directory/employees**").as(
      "employeeCombinedFilter",
    );
  }

  // Intercept Wait Method
  waitDefaultEmployeeList() {
    cy.wait("@defaultEmployeeList")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitEmployeeByLocation() {
    cy.wait("@employeeByLocation").its("response.statusCode").should("eq", 200);
  }
  waitEmployeeByJobTitle() {
    cy.wait("@employeeByJobTitle").its("response.statusCode").should("eq", 200);
  }
  waitEmployeeByName() {
    cy.wait("@employeeByName").its("response.statusCode").should("eq", 200);
  }
  waitEmployeeCombinedFilterContains(paramKeys) {
    cy.wait("@employeeCombinedFilter").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      paramKeys.forEach((key) => {
        expect(interception.request.url).to.include(key);
      });
    });
  }
}

export default new directoryPage();
