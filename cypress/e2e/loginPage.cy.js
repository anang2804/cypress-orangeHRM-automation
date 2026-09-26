import loginPage from "../support/loginPage";
import loginData from "../fixtures/loginData.json";

describe("TC_LOGIN Pengguna dapat login dengan valid kredensial", () => {
  beforeEach(() => {
    loginPage.visitUrl();
  });

  it("TC_LOG_001 Login dengan username terdaftar dan password yang benar", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.dashboardUrlValidation();
  });

  it("TC_LOG_002 Login dengan username yang valid dan password invalid", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.inputPassword(loginData.invalidPassword);
    loginPage.clickLoginBtn();
    loginPage.loginAlertValidation(loginData.invalidAlert);
    loginPage.loginUrlValidation();
  });

  it("TC_LOG_003 Login dengan username invalid dan password yang valid", () => {
    loginPage.inputUsername(loginData.invalidUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.loginAlertValidation(loginData.invalidAlert);
    loginPage.loginUrlValidation();
  });

  it("TC_LOG_004 Login dengan password dan empty username", () => {
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.loginUrlValidation();
  });

  it("TC_LOG_005 Login dengan username dan empty password", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.clickLoginBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.loginUrlValidation();
  });

  it("TC_LOG_006 Login dengan empty username dan password", () => {
    loginPage.clickLoginBtn();
    loginPage.bothAlert();
    loginPage.loginUrlValidation();
  });

  it("TC_LOG_007 Login dengan username case sensitive", () => {
    loginPage.inputUsername(loginData.lowerCaseUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.clickLoginBtn();
    loginPage.dashboardUrlValidation();
  });

  it("TC_LOG_008 Klik link 'Forgot your password?' menuju halaman Reset Password", () => {
    loginPage.clickForgotPassword();
    loginPage.forgotPassUrlValidation();
    loginPage.usernameFieldVisible();
    loginPage.resetPasswordBtnVisible();
  });

  it("TC_LOG_009 Submit form Forgot Password dengan field username dikosongkan", () => {
    loginPage.clickForgotPassword();
    loginPage.clickResetPasswordBtn();
    loginPage.requiredFieldValidation(loginData.requiredAlert);
    loginPage.forgotPassUrlValidation();
  });
});
