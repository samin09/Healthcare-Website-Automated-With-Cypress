import { multiIt, getTestCaseObject } from "../support/itUtil"
import LoginPage from "../pageobject/LoginPage"
import CommonFunctions from "../pageobject/CommonFuntions"
import LandingPage from "../pageobject/LandingPage"
import HomePage from "../pageobject/HomePage"

const loginpage = new LoginPage()
const landingPage = new LandingPage()
const commonfunctions = new CommonFunctions()
const homepage = new HomePage

let obj = require("../fixtures/CuraHealthcare.json")
let formData = obj["formdata"]

describe('CURA Healthcare Website', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    commonfunctions.validationMsg('We Care About Your Health')
  })

  it('Test Case 1: Login user with correct username & password (using "Make Appointment" button)', () => {
    let obj = getTestCaseObject(formData)
    landingPage.makeAppointmentButton().click()
    loginpage.loginFunction(obj)
    commonfunctions.validationMsg('Make Appointment')
    homepage.clickLogoutButtonFromToggleMenu()
  })

  it('Test Case 2: Login user with correct username & password (using "Login" button from ToggleBar)', () => {
    let obj = getTestCaseObject(formData)
    landingPage.clickLoginButtonFromToggleMenu()
    loginpage.loginFunction(obj)
    commonfunctions.validationMsg('Make Appointment')
    homepage.clickLogoutButtonFromToggleMenu()
  })

  //This multiIt function will run 3 test cases one after another.
  multiIt(formData, { testCaseNumber: "Test Case 3" }, (testcase) => {
    landingPage.makeAppointmentButton().click()
    loginpage.loginFunction(testcase)
    commonfunctions.validationMsg('Login failed! Please ensure the username and password are valid.')
  })

  it('Test Case 4: Logout user & verify', () => {
    let obj = getTestCaseObject(formData)
    landingPage.clickLoginButtonFromToggleMenu()
    loginpage.loginFunction(obj)
    commonfunctions.validationMsg('Make Appointment')
    homepage.clickLogoutButtonFromToggleMenu()
    commonfunctions.validationMsg('We Care About Your Health')
  })

  it('Test Case 5: Making appointment', () => {
    let obj = getTestCaseObject(formData)
    landingPage.makeAppointmentButton().click()
    loginpage.loginFunction(obj)
    homepage.appointmentFormFillup(obj)
    commonfunctions.validationMsg('Appointment Confirmation')
    homepage.clickLogoutButtonFromToggleMenu()
  })

  it('Test Case 6: Checking history', () => {
    let obj = getTestCaseObject(formData)
    landingPage.makeAppointmentButton().click()
    loginpage.loginFunction(obj)
    homepage.appointmentFormFillup(obj)
    commonfunctions.validationMsg('Appointment Confirmation')
    homepage.clickHistoryButtonFromToggleMenu()
    commonfunctions.validationMsg(obj.visitDate)
    commonfunctions.validationMsg(obj.comment)
    homepage.clickLogoutButtonFromToggleMenu()
  })

})