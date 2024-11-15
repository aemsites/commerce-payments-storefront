describe('Verify stock notification message', () => {
    xit('Verify low stock and max qty allowed notification message', () => {
        cy.visit('/products/compete-track-tote/24-WB02');
        cy.get('.dropin-incrementer__input').clear().type('1000');
        cy.wait(1000)
        cy.get('.dropin-incrementer__increase-button').click();
        cy.get('.dropin-incrementer__input').should('have.value', '1001');
        // cypress fails intermittently as it takes old value 1, this is needed for tests to be stable
        cy.wait(1000);
        cy.contains('Add to Cart').click();
        cy.contains('The requested qty is not available').should('be.visible')

        cy.get('.dropin-incrementer__input').clear().type('10000');
        cy.wait(1000)
        cy.get('.dropin-incrementer__increase-button').click();
        cy.get('.dropin-incrementer__input').should('have.value', '10001');
        // cypress fails intermittently as it takes old value 1, this is needed for tests to be stable
        cy.wait(1000);
        cy.contains('Add to Cart').click();
        cy.contains('The requested qty exceeds the maximum qty allowed in shopping cart').should('be.visible');
    });
});
