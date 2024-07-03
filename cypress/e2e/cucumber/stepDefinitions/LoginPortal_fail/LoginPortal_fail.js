import{Given,When,Then} from 'cypress-cucumber-preprocessor/steps'


Given(/^User goes to login page$/, () => {
	cy.visit('https://www.webdriveruniversity.com/Login-Portal/index.html');
});

When(/^User puts in wrong credentials$/, () => {
	cy.get('#text').type('sarfgfrgd')
	cy.get('#password').type('fdgdffgxddf')

});

When(/^User Clicks Login$/, () => {
	cy.get('#login-button').click()
});

Then(/^a failed pop up should show up$/, () => {
	return true;
});
