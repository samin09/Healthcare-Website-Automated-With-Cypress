class LoginPage {
    makeAppointmentButton() {
        return cy.get('#btn-make-appointment')
    }
    username() {
        return cy.get('#txt-username')
    }
    password() {
        return cy.get('#txt-password')
    }
    loginButton() {
        return cy.get('#btn-login')
    }

    loginFunction(obj) {
        this.makeAppointmentButton().click()
        this.username().type(obj.username)
        this.password().type(obj.password)
        this.loginButton().click()
    }

}
export default LoginPage