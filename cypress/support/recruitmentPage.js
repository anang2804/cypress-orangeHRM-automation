class recruitmentPage {
  // Navigasi
  clickRecruitmentMenu() {
    cy.contains("Recruitment").click();
  }
  recruitmentUrlValidation() {
    cy.url().should("include", "/recruitment");
  }
  addCandidateUrlValidation() {
    cy.url().should("include", "/addCandidate");
  }
  clickCandidatesTab() {
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(1)").click();
  }
  clickVacanciesTab() {
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(2)").click();
  }

  // Dropdown Field
  openDropdown(index) {
    cy.get(".oxd-select-text").eq(index).click();
  }
  selectJobTitle(jobTitle) {
    this.openDropdown(0);
    cy.get(".oxd-select-option").contains(jobTitle).click();
  }
  selectVacancy(vacancy) {
    this.openDropdown(1);
    cy.get(".oxd-select-option").contains(vacancy).click();
  }
  selectHiringManager(hiringManager) {
    this.openDropdown(2);
    cy.get(".oxd-select-option").contains(hiringManager).click();
  }
  selectStatus(status) {
    this.openDropdown(3);
    cy.get(".oxd-select-option").contains(status).click();
  }
  selectMethodOfApplication(methodOfApplication) {
    this.openDropdown(4);
    cy.get(".oxd-select-option").contains(methodOfApplication).click();
  }
  verifyDropdownOptionsExist() {
    cy.get(".oxd-select-option").should("have.length.greaterThan", 0);
  }

  // Candidate Name
  typeCandidateName(candidateName) {
    cy.get("input[placeholder='Type for hints...']").type(candidateName);
  }
  selectCandidateSuggestion(candidateName) {
    cy.get(".oxd-autocomplete-dropdown").contains(candidateName).click();
  }
  searchCandidateByName(candidateName) {
    this.typeCandidateName(candidateName);
    this.selectCandidateSuggestion(candidateName);
  }
  verifyNoCandidateSuggestion() {
    cy.get(".oxd-autocomplete-option").should("contain", "No Records Found");
  }

  // Keyword
  typeKeywords(keywords) {
    cy.get("input[placeholder='Enter comma seperated words...']").type(
      keywords,
    );
  }

  // Date of Application
  typeDateFrom(date) {
    cy.get("input[placeholder='From']").type(date);
  }
  typeDateTo(date) {
    cy.get("input[placeholder='To']").type(date);
  }

  // Buttons
  clickSearchBtn() {
    cy.get("button[type='submit']").click();
  }
  clickResetBtn() {
    cy.contains("button", "Reset").click();
  }
  clickAddBtn() {
    cy.contains("button", "Add").click();
  }

  // Search Result
  verifySearchResultContains(candidateName) {
    cy.get(".oxd-table-row").should("contain", candidateName);
    cy.get(".oxd-table-cell-actions").should("be.visible");
  }
  verifyNoRecordsFound() {
    cy.contains("No Records Found").should("be.visible");
  }

  // Intercept
  interceptDefaultCandidateList() {
    cy.intercept(
      "GET",
      "**/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC",
    ).as("defaultCandidateList");
  }
  interceptCandidateByJobTitle() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**jobTitleId=*").as(
      "candidateByJobTitle",
    );
  }
  interceptCandidateByVacancy() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**vacancyId=*").as(
      "candidateByVacancy",
    );
  }
  interceptCandidateByHiringManager() {
    cy.intercept(
      "GET",
      "**/api/v2/recruitment/candidates**hiringManagerId=*",
    ).as("candidateByHiringManager");
  }
  interceptCandidateByStatus() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**status=*").as(
      "candidateByStatus",
    );
  }
  interceptCandidateByKeywords() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**keywords=*").as(
      "candidateByKeywords",
    );
  }
  interceptCandidateByDateOfApplication() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**fromDate=*").as(
      "candidateByDateOfApplication",
    );
  }
  interceptCandidateByMethodOfApplication() {
    cy.intercept(
      "GET",
      "**/api/v2/recruitment/candidates**methodOfApplication=*",
    ).as("candidateByMethodOfApplication");
  }
  interceptCandidateCombinedFilter() {
    cy.intercept("GET", "**/api/v2/recruitment/candidates**").as(
      "candidateCombinedFilter",
    );
  }

  // Intercept Wait Method
  waitDefaultCandidateList() {
    cy.wait("@defaultCandidateList")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateByJobTitle() {
    cy.wait("@candidateByJobTitle")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateByVacancy() {
    cy.wait("@candidateByVacancy").its("response.statusCode").should("eq", 200);
  }
  waitCandidateByHiringManager() {
    cy.wait("@candidateByHiringManager")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateByStatus() {
    cy.wait("@candidateByStatus").its("response.statusCode").should("eq", 200);
  }
  waitCandidateByKeywords() {
    cy.wait("@candidateByKeywords")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateByDateOfApplication() {
    cy.wait("@candidateByDateOfApplication")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateByMethodOfApplication() {
    cy.wait("@candidateByMethodOfApplication")
      .its("response.statusCode")
      .should("eq", 200);
  }
  waitCandidateCombinedFilterContains(paramKeys) {
    cy.wait("@candidateCombinedFilter").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      paramKeys.forEach((key) => {
        expect(interception.request.url).to.include(key);
      });
    });
  }
}

export default new recruitmentPage();
