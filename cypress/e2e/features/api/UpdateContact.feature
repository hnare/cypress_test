Feature: Update Contact


@api
  Scenario: Update a user and verify response
    Given I make a PUT request to "/api/users/2"
    Then the response should be 200
    And the response should contain name "morpheusTestUpdated"

    # And the response should match the fixture "contact.json"
