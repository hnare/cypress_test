Feature: Feature to test multiple login scenarios
        

@test
    Scenario Outline: Success Login 
        Given a user navigates to login page
        When user enter a valid "<email>" and "<password>"
        And user clicks on submit
        Then the page contains text "Contact List App"

    Examples:
      | email               | password     |
      | test11@tests.com    | Test1234*    |
      | test1@tests.com     | Test1234*    |
