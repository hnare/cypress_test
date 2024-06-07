Feature: Feature to test multiple sign up scenarios


@signup
    Scenario: Success Sign Up
        Given a user navigates to signup page
        When user submits the below details
             | First Name | Last Name | email            | password  |
             | Test       | user      | test19@tests.com | Test1234* |
        # Then the page contains text "Logout"
        And user clicks on Logout
