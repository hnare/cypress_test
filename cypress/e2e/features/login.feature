Feature: Feature to test multiple login scenarios
        

@test
    Scenario Outline: Success Login 
        Given a user navigates to login page
        When user enters "<email>" and "<password>"
        And user clicks on submit
        Then the page contains text "Contact List App"

    Examples:
      | email               | password     |
      | test11@tests.com    | Test1234*    |
      | test1@tests.com     | Test1234*    |

@test1
    Scenario: Unsuccessfull Login 
        Given a user navigates to login page
        When user enters "Invalid@test.com" and "password"
        And user clicks on submit
        Then user is presented with error message "Incorrect username or password"


