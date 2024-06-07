Feature: Feature to test multiple scenarios

    Background:
        Given a user navigates to login page
    Scenario: Success Sign Up
    # When user enters first name "Test"
        When user submits the below details
      | First Name | Last Name | email          | password  |
      | Test       | user      | test11@tests.com | Test1234* |
        Then the page contains text "Logout"