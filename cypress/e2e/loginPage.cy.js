import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";

describe("TC_LOGIN Pengguna dapat login dengan valid kredensial", () => {
  beforeEach(() => {
    loginPage.visitUrl();
  });

  it("TC-001 Login dengan username terdaftar dan password yang benar", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.dashboardUrlValidation();
  });

  it("TC-002 Login dengan username yang valid dan password invalid", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.inputPassword(loginData.invalidPassword);
    loginPage.clickLoginBtn();
    loginPage.loginAlertValidation(loginData.invalidAlert);
    loginPage.loginUrlValidation();
  });

  it("TC-003 Login dengan username invalid dan password yang valid", () => {
    loginPage.inputUsername(loginData.invalidUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.loginAlertValidation(loginData.invalidAlert);
    loginPage.loginUrlValidation();
  });

  it("TC-004 Login dengan password dan empty username", () => {
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.loginUrlValidation();
  });

  it("TC-005 Login dengan username dan empty password", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.clickLoginBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.loginUrlValidation();
  });

  it("TC-006 Login dengan empty username dan password", () => {
    loginPage.clickLoginBtn();
    loginPage.bothAlert();
    loginPage.loginUrlValidation();
  });

  it("TC-007 Login dengan username case sensitive", () => {
    loginPage.inputUsername(loginData.lowerCaseUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.dashboardUrlValidation();
  });

  it("TC-008 Klik link 'Forgot your password?' menuju halaman Reset Password", () => {
    loginPage.clickForgotPassword();
    loginPage.forgotPassUrlValidation();
    loginPage.usernameFieldVisible();
    loginPage.resetPasswordBtnVisible();
  });

  it("TC-009 Submit form Forgot Password dengan field username dikosongkan", () => {
    loginPage.clickForgotPassword();
    loginPage.clickResetPasswordBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.forgotPassUrlValidation();
  });

  it("TC-010 Submit form Forgot Password dengan username terdaftar", () => {
    loginPage.clickForgotPassword();
    loginPage.inputUsername(loginData.validUsername);
    loginPage.clickResetPasswordBtn();
    // Expected: muncul halaman konfirmasi "Reset Password link sent successfully"
    // Actual (tercatat di test case manual): 504 Gateway Timeout — kemungkinan test ini akan Fail
    cy.contains("Reset Password link sent successfully").should("be.visible");
  });
});
