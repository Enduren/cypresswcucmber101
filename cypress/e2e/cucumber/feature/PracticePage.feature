Feature: Practice Page Functionality

  Scenario: User goes through a few examples
    Given User is on the practice page
    When User clicks Benz
    When User selects Honda
    Then User should see Benz and Honda
