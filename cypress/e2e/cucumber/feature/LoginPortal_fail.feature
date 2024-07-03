Feature: failed login

  Scenario: Login with bad credentials
    Given User goes to login page
    When User puts in wrong credentials
    When User Clicks Login
    Then a failed pop up should show up
