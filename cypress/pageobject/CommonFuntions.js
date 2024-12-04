class CommonFunctions {
    validationMsg(obj) {
        cy.contains(obj).should('be.visible')
    }
}
export default CommonFunctions