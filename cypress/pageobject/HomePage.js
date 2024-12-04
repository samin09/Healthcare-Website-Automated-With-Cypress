class HomePage {
    facility() {
        return cy.get('#combo_facility')
    }
    hospitalReadmission() {
        return cy.get('#chk_hospotal_readmission')
    }
    healthcareProgram(obj) {
        if (obj == 'Medicare') { cy.get('#radio_program_medicare').click() }
        else if (obj == 'Medicaid') { cy.get('#radio_program_medicaid').click() }
        else { cy.get('#radio_program_none').click() }
    }
    visitDate() {
        return cy.get('#txt_visit_date')
    }
    comment() {
        return cy.get('#txt_comment')
    }

    bookAppointmentButton() {
        return cy.get('#btn-book-appointment')
    }
    toggleMenu() {
        return cy.get('#menu-toggle > .fa')
    }
    historyButton() {
        return cy.contains('History')
    }
    logoutButton() {
        return cy.contains('Logout')
    }

    appointmentFormFillup(obj) {
        this.facility().select(obj.facility)
        if (obj.hospitalReadmission) { this.hospitalReadmission().check() }
        this.healthcareProgram(obj.healthcareProgram)
        this.comment().type(obj.comment)
        this.visitDate().type(obj.visitDate)
        this.bookAppointmentButton().click()
    }
    clickHistoryButtonFromToggleMenu() {
        this.toggleMenu().click()
        this.historyButton().click()
    }
    clickLogoutButtonFromToggleMenu() {
        this.toggleMenu().click()
        this.logoutButton().click()
    }
}
export default HomePage