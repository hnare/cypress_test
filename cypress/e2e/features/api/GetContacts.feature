Feature: Get Contact 


@api
  Scenario: Verify API Response
    Given I make a GET request to "/api/users/2"
    Then the response status should be 200
    And the response should contain "janet.weaver@reqres.in"

    # And the response should match the fixture "contact.json"
