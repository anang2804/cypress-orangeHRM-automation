import loginPage from "../support/loginPage";
import pimPage from "../support/pimPage";
import pimData from "../fixtures/pimData.json";

describe("OrangeHRM - PIM Employee List", () => {
  beforeEach(() => {
    loginPage.login();
    pimPage.openPimMenu();
    pimPage.employeeListUrlValidation();
  });

  // TC-PIM-001
  it("TC-PIM-001 - Menampilkan halaman Employee List dengan elemen lengkap", () => {
    pimPage.verifyEmployeeListElements();
  });

  // TC-PIM-002
  it("TC-PIM-002 - Search karyawan menggunakan Employee Name yang valid", () => {
    pimPage.typeEmployeeName(pimData.search.validName);
    pimPage.clickSearchBtn();
    pimPage.verifyResultExists();
  });

  // TC-PIM-003
  it("TC-PIM-003 - Search karyawan menggunakan Employee Name yang tidak terdaftar", () => {
    pimPage.typeEmployeeName(pimData.search.invalidName);
    pimPage.clickSearchBtn();
    pimPage.verifyNoRecordsFound();
  });

  // TC-PIM-004
  it("TC-PIM-004 - Reset filter setelah pencarian dilakukan", () => {
    pimPage.typeEmployeeName(pimData.search.validName);
    pimPage.clickSearchBtn();
    pimPage.clickResetBtn();
    pimPage.verifyEmployeeNameFieldEmpty();
  });

  // TC-PIM-005
  it("TC-PIM-005 - Pengguna dapat membuka halaman Add Employee", () => {
    pimPage.clickAddBtn();
    pimPage.addEmployeeUrlValidation();
    pimPage.verifyAddEmployeeElements();
  });

  // TC-PIM-006
  it("TC-PIM-006 - Tambah karyawan dengan data valid", () => {
    pimPage.clickAddBtn();
    pimPage.typeFirstName(pimData.addEmployee.firstName);
    pimPage.typeLastName(pimData.addEmployee.lastName);

    cy.intercept("POST", "**/api/v2/pim/employees").as("saveEmployee");
    pimPage.clickSaveBtn();
    cy.wait("@saveEmployee").its("response.statusCode").should("eq", 200);

    pimPage.personalDetailsUrlValidation();
  });

  // TC-PIM-007
  it("TC-PIM-007 - Tambah karyawan tanpa mengisi First Name", () => {
    pimPage.clickAddBtn();
    pimPage.typeLastName(pimData.addEmployee.lastName);
    pimPage.clickSaveBtn();
    pimPage.requiredFieldValidation("Required");
  });

  // TC-PIM-008
  it("TC-PIM-008 - Tambah karyawan menggunakan Employee ID yang sudah terdaftar", () => {
    pimPage.clickAddBtn();
    pimPage.typeFirstName(pimData.addEmployee.firstName);
    pimPage.typeLastName(pimData.addEmployee.lastName);
    pimPage.typeEmployeeIdOnAddForm(pimData.addEmployee.duplicateEmployeeId);
    pimPage.clickSaveBtn();
    pimPage.employeeIdDuplicateValidation();
  });
});
