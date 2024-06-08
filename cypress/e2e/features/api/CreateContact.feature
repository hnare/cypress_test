Feature: Create Contact


@api
  Scenario: Create a user and verify response
    Given I make a POST request to "/api/users"
    Then the response should be 201
    And the response should contain name "morpheusTest"

    # And the response should match the fixture "contact.json"
