import loginPage from "../support/loginPage";
import claimPage from "../support/claimPage";
import claimData from "../fixtures/claimData.json";

describe("OrangeHRM - Claim", () => {
  beforeEach(() => {
    loginPage.login();
    claimPage.openClaimMenu();
    claimPage.submitClaimUrlValidation();
  });

  // TC-CLM-001
  it("TC-CLM-001 - Membuat Claim dengan data valid", () => {
    claimPage.selectEvent(claimData.event);
    claimPage.selectCurrency(claimData.currency);
    claimPage.typeRemarks(claimData.remarks);

    cy.intercept("POST", "**/api/v2/claim/requests").as("createClaim");
    claimPage.clickCreateBtn();
    cy.wait("@createClaim").its("response.statusCode").should("eq", 200);

    claimPage.viewClaimUrlValidation();
  });

  // TC-CLM-002
  it("TC-CLM-002 - Membuat Claim tanpa memilih Event", () => {
    claimPage.selectCurrency(claimData.currency);
    claimPage.clickCreateBtn();
    claimPage.requiredFieldValidation("Required");
  });

  // TC-CLM-003
  it("TC-CLM-003 - Membuat Claim tanpa memilih Currency", () => {
    claimPage.selectEvent(claimData.event);
    claimPage.clickCreateBtn();
    claimPage.requiredFieldValidation("Required");
  });

  // TC-CLM-004
  it("TC-CLM-004 - Membuat Claim tanpa Event dan Currency", () => {
    claimPage.clickCreateBtn();
    claimPage.requiredFieldCountValidation(2);
  });

  // TC-CLM-005
  it("TC-CLM-005 - Cancel pembuatan Claim", () => {
    claimPage.selectEvent(claimData.event);
    claimPage.typeRemarks(claimData.remarks);

    claimPage.clickCancelBtn();
    claimPage.cancelUrlValidation();
  });

  // TC-CLM-006
  it("TC-CLM-006 - Search Claim berdasarkan Reference ID", () => {
    claimPage.openMyClaimsMenu();
    claimPage.myClaimsUrlValidation();

    claimPage.typeReferenceId(claimData.referenceId);
    claimPage.clickSearchBtn();
    claimPage.searchResultValidation(claimData.referenceId);
  });

  // TC-CLM-007
  it("TC-CLM-007 - Search Claim menggunakan Reference ID tidak terdaftar", () => {
    claimPage.openMyClaimsMenu();
    claimPage.myClaimsUrlValidation();

    claimPage.typeReferenceId(claimData.invalidReferenceId);
    claimPage.clickSearchBtn();
    claimPage.noRecordsFoundValidation();
  });

  // TC-CLM-008
  it("TC-CLM-008 - Reset filter pencarian Claim", () => {
    claimPage.openMyClaimsMenu();
    claimPage.myClaimsUrlValidation();

    claimPage.typeReferenceId(claimData.referenceId);
    claimPage.selectEventNameFilter(claimData.event);
    claimPage.clickSearchBtn();

    claimPage.clickResetBtn();
    claimPage.filterResetValidation();
  });
});
