import loginPage from "../support/loginPage";
import recruitmentPage from "../support/recruitmentPage";
import recruitmentData from "../fixtures/recruitmentData.json";

describe("SC_REC_001 Verifikasi Menu Recruitment", () => {
  beforeEach(() => {
    loginPage.login();
  });

  it("TC_REC_001 Navigasi ke menu Recruitment lewat sidebar", () => {
    recruitmentPage.interceptDefaultCandidateList();
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.waitDefaultCandidateList();
  });

  it("TC_REC_002 Verifikasi tab Candidates dan Vacancies terlihat dan dapat diklik", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.clickVacanciesTab();
    recruitmentPage.clickCandidatesTab();
  });

  it("TC_REC_003 Search hanya menggunakan dropdown Job Title", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByJobTitle();
    recruitmentPage.selectJobTitle(recruitmentData.jobTitle);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByJobTitle();
  });

  it("TC_REC_004 Search hanya menggunakan dropdown Vacancy", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByVacancy();
    recruitmentPage.selectVacancy(recruitmentData.vacancy);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByVacancy();
  });

  it("TC_REC_005 Search hanya menggunakan dropdown Hiring Manager", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByHiringManager();
    recruitmentPage.selectHiringManager(recruitmentData.hiringManager);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByHiringManager();
  });

  it("TC_REC_006 Search hanya menggunakan dropdown Status", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByStatus();
    recruitmentPage.selectStatus(recruitmentData.status);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByStatus();
  });

  it("TC_REC_007 Search hanya dengan Candidate Name yang valid", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.searchCandidateByName(recruitmentData.validCandidateName);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.verifySearchResultContains(
      recruitmentData.validCandidateName,
    );
  });

  it("TC_REC_008 Search dengan Candidate Name yang tidak terdaftar", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.typeCandidateName(recruitmentData.invalidCandidateName);
    recruitmentPage.verifyNoCandidateSuggestion();
  });

  it("TC_REC_009 Search menggunakan field Keyword dengan kata yang dipisah koma", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByKeywords();
    recruitmentPage.typeKeywords(recruitmentData.keywords);
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByKeywords();
  });

  it("TC_REC_010 Search dengan 'Date of Application From' dan 'Date of Application To'", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByDateOfApplication();
    recruitmentPage.typeDateFrom(recruitmentData.dateFromValid);
    recruitmentPage.typeDateTo(recruitmentData.dateToValid);
    cy.get(".oxd-main-menu-search > .oxd-icon-button").click();
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByDateOfApplication();
  });

  it("TC_REC_011 Search hanya menggunakan dropdown Method of Application", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.interceptCandidateByMethodOfApplication();
    recruitmentPage.selectMethodOfApplication(
      recruitmentData.methodOfApplication,
    );
    recruitmentPage.clickSearchBtn();
    recruitmentPage.waitCandidateByMethodOfApplication();
  });

  it("TC_REC_012 Search menggunakan kombinasi beberapa field", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.selectJobTitle(recruitmentData.jobTitle);
    recruitmentPage.selectVacancy(recruitmentData.vacancy);
    recruitmentPage.selectHiringManager(recruitmentData.hiringManager);
    recruitmentPage.interceptCandidateCombinedFilter();
    recruitmentPage.clickSearchBtn();

    recruitmentPage.waitCandidateCombinedFilterContains([
      "jobTitleId",
      "vacancyId",
      "hiringManagerId",
    ]);
  });

  it("TC_REC_013 Klik tombol 'Reset' pada form pencarian", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.searchCandidateByName(recruitmentData.validCandidateName);
    recruitmentPage.clickResetBtn();
    cy.get("input[placeholder='Type for hints...']").should("have.value", "");
  });

  it("TC_REC_014 Klik tombol 'Add' menuju halaman Add Candidate", () => {
    recruitmentPage.clickRecruitmentMenu();
    recruitmentPage.recruitmentUrlValidation();
    recruitmentPage.clickAddBtn();
    recruitmentPage.addCandidateUrlValidation();
  });
});
