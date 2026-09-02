import loginPage from "../support/loginPage";
import directoryPage from "../support/directoryPage";
import directoryData from "../fixtures/directoryData.json";

describe("SC_DIR_001 Verifikasi Menu Directory", () => {
  beforeEach(() => {
    loginPage.login();
  });

  it("TC_DIR_001 Navigasi ke menu Directory lewat sidebar", () => {
    directoryPage.interceptDefaultEmployeeList();
    directoryPage.clickDirectoryMenu();
    directoryPage.waitDefaultEmployeeList();
    directoryPage.directoryUrlValidation();
  });

  it("TC_DIR_002 Search hanya dengan Employee Name yang valid", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.interceptEmployeeByName();
    directoryPage.searchEmployeeByName(directoryData.validEmployeeName);
    directoryPage.clickSearchBtn();
    directoryPage.waitEmployeeByName();
    directoryPage.verifySearchResultContains(directoryData.validEmployeeName);
  });

  it("TC_DIR_003 Search dengan Employee Name yang tidak terdaftar", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.typeEmployeeName(directoryData.invalidEmployeeName);
    directoryPage.verifyNoEmployeeSuggestion();
  });

  it("TC_DIR_004 Search hanya menggunakan dropdown Job Title", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.interceptEmployeeByJobTitle();
    directoryPage.selectJobTitle(directoryData.jobTitle);
    directoryPage.clickSearchBtn();
    directoryPage.waitEmployeeByJobTitle();
  });

  it("TC_DIR_005 Search hanya menggunakan dropdown Location", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.interceptEmployeeByLocation();
    directoryPage.selectLocation(directoryData.location);
    directoryPage.clickSearchBtn();
    directoryPage.waitEmployeeByLocation();
  });

  it("TC_DIR_006 Search menggunakan kombinasi Employee Name, Job Title, dan Location", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.searchEmployeeByName(directoryData.validEmployeeName);
    directoryPage.selectJobTitle(directoryData.jobTitle);
    directoryPage.selectLocation(directoryData.location);
    directoryPage.interceptEmployeeCombinedFilter();
    directoryPage.clickSearchBtn();

    directoryPage.waitEmployeeCombinedFilterContains([
      "empNumber",
      "jobTitleId",
      "locationId",
    ]);
  });

  it("TC_DIR_007 Klik tombol 'Search' tanpa mengisi field apapun", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.interceptDefaultEmployeeList();
    directoryPage.clickSearchBtn();
    directoryPage.waitDefaultEmployeeList();
  });

  it("TC_DIR_008 Klik tombol 'Reset' setelah mengisi form pencarian", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.searchEmployeeByName(directoryData.validEmployeeName);
    directoryPage.clickResetBtn();
    cy.get("input[placeholder='Type for hints...']").should("have.value", "");
  });

  it("TC_DIR_009 Verifikasi dropdown Job Title menampilkan daftar opsi yang valid", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.openJobTitleDropdown();
    directoryPage.verifyJobTitleOptionsExist();
  });

  it("TC_DIR_010 Verifikasi dropdown Location menampilkan daftar opsi yang valid", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.openLocationDropdown();
    directoryPage.verifyLocationOptionsExist();
  });

  it("TC_DIR_011 Verifikasi hasil pencarian menampilkan Employee Name, Profile Picture, Job Title, dan Location dengan benar", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.interceptEmployeeByName();
    directoryPage.searchEmployeeByName(directoryData.validEmployeeName);
    directoryPage.clickSearchBtn();
    directoryPage.waitEmployeeByName();
    directoryPage.verifySearchResultContains(directoryData.validEmployeeName);
  });

  it("TC_DIR_012 Search dengan karakter spesial pada field Employee Name", () => {
    directoryPage.clickDirectoryMenu();
    directoryPage.directoryUrlValidation();
    directoryPage.typeEmployeeName(directoryData.specialCharacterName);
    directoryPage.verifyNoEmployeeSuggestion();
  });
});
