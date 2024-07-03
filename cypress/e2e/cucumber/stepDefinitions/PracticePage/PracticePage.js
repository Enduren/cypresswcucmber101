import{Given,When,Then,And} from 'cypress-cucumber-preprocessor/steps'




Given(/^User is on the practice page$/, () => {
	cy.visit('https://www.letskodeit.com/practice');
});

When(/^User clicks Benz$/, () => {
	cy.get('#benzradio').click();
});

When(/^User selects Honda$/, () => {
	cy.get('#carselect').select('Honda');
});

Then(/^User should see Benz and Honda$/, () => {
	cy.get('#radio-btn-example > fieldset > [for="benz"]').contains('Benz');
    cy.get('#carselect').contains('Honda')
});

When('User selects Honda', () => {
  // Write code here that turns the phrase above into concrete actions
})
