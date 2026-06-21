Feature: Login functionality

  # @login
  # Scenario Outline: Invalid Login
  #   Given User navigates to login page
  #   When User enters username "<username>"
  #   And User enters password "<password>"
  #   And User clicks on login button
  #   Then Login error message should be displayed

  #   Examples:
  #   |username    |    password      |
  #   |admin      |admin123          |
  #   |rahulshetty|Learning@830$3mK2)|
  #   |rahulshettyacademy|Learning123|


  # Scenario: Valid Login
  #   Given User navigates to login page
  #   When User enters username "rahulshettyacademy"
  #   And User enters password "Learning@830$3mK2"
  #   And User clicks on login button
  #   Then User lands in the Homepage

  Scenario: Validation of Java radio button for language
    Given User navigates to login page
    When User enters username "student"
    And User enters password "Password123"
    And User clicks on login button
    Then User lands in the Homepage
    Then user clicks on practice button
    When user clicks on test table
    Then user lands on test table page
    When clicked on java radio button
    Then check if all language in the table is java

  Scenario Outline: Validation of Java radio button for language
    Given User navigates to login page
    When User enters username "<username>"
    And User enters password "<password>"
    And User clicks on login button
    Then User lands in the Homepage
    Then user clicks on practice button
    When user clicks on test table
    Then user lands on test table page
    When clicked on specific "<level>" checkbox

    Examples:
      | username | password    | level    |
      | student  | Password123 | Advanced |


    