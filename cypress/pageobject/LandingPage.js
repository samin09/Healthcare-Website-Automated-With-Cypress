class LandingPage {
    makeAppointmentButton() {
        return cy.get('#btn-make-appointment')
    }
    toggleMenu() {
        return cy.get('#menu-toggle > .fa')
    }
    loginButton() {
        return cy.contains('Login')
    }

    clickLoginButtonFromToggleMenu() {
        this.toggleMenu().click()
        this.loginButton().click()
    }
}
export default LandingPage