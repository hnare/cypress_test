Feature: Example API Test


@api
  Scenario: Verify API Response
    Given I make a GET request to "/posts1"
    Then the response status should be 200
    And the response should contain "title"

    # And the response should match the fixture "contact.json"
