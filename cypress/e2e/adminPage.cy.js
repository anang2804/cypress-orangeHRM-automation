import loginPage from "../support/loginPage";
import adminPage from "../support/adminPage";
import adminData from "../fixtures/adminData.json";

describe("OrangeHRM - Admin User Management", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/v2/admin/users*").as("searchUsers");

    loginPage.login();
    adminPage.openAdminMenu();
    adminPage.adminUrlValidation();
  });

  // TC-ADM-001
  it("TC-ADM-001 - Search user menggunakan Username yang valid", () => {
    adminPage.typeUsername(adminData.searchUser.validUsername);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    cy.contains(adminData.searchUser.validUsername).should("be.visible");
  });

  // TC-ADM-002
  it("TC-ADM-002 - Search user menggunakan Username yang tidak terdaftar", () => {
    adminPage.typeUsername(adminData.searchUser.invalidUsername);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    adminPage.verifyNoRecordsFound();
  });

  // TC-ADM-003
  it("TC-ADM-003 - Search user berdasarkan User Role = Admin", () => {
    adminPage.selectUserRole(adminData.filter.role);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    adminPage.verifyResultExists();
  });

  // TC-ADM-004
  it("TC-ADM-004 - Search user berdasarkan Status = Enabled", () => {
    adminPage.selectStatus(adminData.filter.status);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    adminPage.verifyResultExists();
  });

  // TC-ADM-005
  it("TC-ADM-005 - Search kombinasi Username + User Role + Status", () => {
    adminPage.typeUsername(adminData.searchUser.validUsername);
    adminPage.selectUserRole(adminData.filter.role);
    adminPage.selectStatus(adminData.filter.status);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    cy.contains(adminData.searchUser.validUsername).should("be.visible");
  });

  // TC-ADM-006
  it("TC-ADM-006 - Reset filter setelah hasil pencarian ditampilkan", () => {
    adminPage.typeUsername(adminData.searchUser.validUsername);
    adminPage.selectUserRole(adminData.filter.role);
    adminPage.selectStatus(adminData.filter.status);
    adminPage.clickSearchBtn();

    adminPage.clickResetBtn();

    adminPage.verifyUsernameFieldValue("");
    adminPage.verifyUserRoleDefault();
    adminPage.verifyStatusDefault();
  });

  // TC-ADM-007
  it("TC-ADM-007 - Verifikasi sorting Username ascending dan descending", () => {
    adminPage.clickUsernameSortDropdown();
    adminPage.clickSortAscending();
    adminPage.verifyResultExists();

    adminPage.getUsernameList().then((list) => {
      const sortedAsc = [...list].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" }),
      );
      expect(list).to.deep.equal(sortedAsc);
    });

    adminPage.clickUsernameSortDropdown();
    adminPage.clickSortDescending();
    adminPage.verifyResultExists();

    adminPage.getUsernameList().then((list) => {
      const sortedDesc = [...list].sort((a, b) =>
        b.localeCompare(a, undefined, { sensitivity: "base" }),
      );
      expect(list).to.deep.equal(sortedDesc);
    });
  });

  // TC-ADM-008
  it("TC-ADM-008 - Search Username dengan spasi di awal dan akhir", () => {
    adminPage.typeUsername(adminData.searchUser.usernameWithSpaces);
    adminPage.clickSearchBtn();

    cy.wait("@searchUsers").its("response.statusCode").should("eq", 200);
    cy.contains(adminData.searchUser.validUsername).should("be.visible");
  });
});
